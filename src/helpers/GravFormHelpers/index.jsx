// https://github.com/codifytools/react-npm-package-boilerplate/blob/master/package.json

import classnames from "classnames";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormGeneralError from "./components/FormGeneralError";
import FieldBuilder from "./container/FieldBuilder";
import { handleGravityFormsValidationErrors } from "./utils/manageErrors";
import { submissionHasOneFieldEntry } from "./utils/manageFormData";
import formatPayload from "./utils/formatPayload";
import { valueToLowerCase } from "./utils/helpers";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { submitMutationQuery } from "./query";
//import { submitGravityForm } from "./fetch";
import StepBanner from "./components/StepBanner";
import StepNavigation from "./components/StepNavigation";

/**
 * Component to take Gravity Form graphQL data and turn into
 * a fully functional form.
 * @param {mixed} data Form dataset from graphQL
 */
const GravityFormForm = ({ data, presetValues = null, successCallback = () => {}, errorCallback = () => {}, navigate }) => {
	const preOnSubmit = useRef();
	const [pages, setPages] = useState([]);

	// Split out form data.
	const form = data?.gfForm;

	// Deconstruct global settings (if provided).
	const settings = data?.gfSettings || {};

	const { submitButton, confirmations, databaseId, descriptionPlacement, formFields, labelPlacement, subLabelPlacement } = form;

	//Apollo submit form mutation
	const [submitForm] = useMutation(submitMutationQuery);

	useEffect(() => {
		const pageSetup = [];
		formFields.nodes.forEach((field) => {
			const pageInd = field.pageNumber - 1;
			if (!pageSetup[pageInd]) {
				pageSetup[pageInd] = {
					pageName: form.pagination?.pageNames[pageInd] ? form.pagination.pageNames[pageInd] : "",
					pageNum: field.pageNumber,
					fields: [],
				};
			}
			pageSetup[pageInd].fields.push(field);
		});
		setPages([...pageSetup]);
	}, []);

	const redirect = navigate
		? (url) => {
				navigate(url);
		  }
		: (url) => {
				return (window.location.href = url);
		  };

	// Pull in form functions
	const methods = useForm();
	const {
		handleSubmit,
		setError,
		reset,
		getValues,
		formState: { errors, isValid },
	} = methods;

	const [generalError, setGeneralError] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);

	const onSubmitCallback = async () => {
		// Make sure we are not already waiting for a response
		if (!loading) {
			setLoading(true);
			// Clean error
			await preOnSubmit?.current?.recaptcha();
			const values = getValues();

			const formattedVals = {};
			for (const key in values) {
				if (typeof values[key] === "boolean") {
					formattedVals[key] = values[key].toString();
				} else {
					formattedVals[key] = values[key];
				}
			}

			// Check that at least one field has been filled in
			if (submissionHasOneFieldEntry(values)) {
				setGeneralError("");
				const formRes = formatPayload({
					serverData: formFields?.nodes,
					clientData: formattedVals,
				});
				console.log("formRes", formRes);
				submitForm({
					variables: {
						id: databaseId,
						fieldValues: formRes,
					},
				})
					.then(({ data: { submitGfForm: errors } }) => {
						// Success if no errors returned.
						//console.log(data);
						if (!Boolean(errors?.length)) {
							setSuccess(true);
							setLoading(false);
							successCallback({
								data: formRes,
								reset,
							});
						} else {
							setLoading(false);
							handleGravityFormsValidationErrors(errors, setError);
							errorCallback({
								data: formRes,
								error: errors,
								reset,
							});
						}
					})
					.catch((error) => {
						console.log(error);
						setLoading(false);
						setGeneralError("unknownError");
						errorCallback({ data: formRes, error: errors, reset });
					});
			} else {
				setLoading(false);
				setGeneralError("leastOneField");
			}
		}
	};

	if (success) {
		const confirmation = confirmations?.find((el) => {
			// First check if there is a custom confirmation
			// that is not the default.
			if (el.isActive && !el.isDefault) {
				return true;
			}

			// If not, revert back to the default one.
			if (el.isDefault) {
				return true;
			}

			return false;
		});

		if (confirmation.type === "PAGE") {
			// TODO: Somehow need to get the page URL. Query currently
			// returns the page ID for the page redirect.
			redirect(confirmation?.url);
		}

		if (confirmation.type === "REDIRECT") {
			// TODO: Check that the redirect is internal.
			// If not, use window.location to direct to external URL.
			redirect(confirmation?.url);
		}

		if (confirmation.type === "MESSAGE") {
			return (
				<div className="gform_confirmation_wrapper">
					<div
						className="gform_confirmation_message"
						/* eslint-disable react/no-danger */
						dangerouslySetInnerHTML={{ __html: confirmation?.message }}
					/>
				</div>
			);
		}
	}

	// update current page index
	const handlePageIndChange = (index) => {
		setCurrentPage(index);
	};

	console.log(currentPage, "---", pages.length);
	return (
		<div className="gform_wrapper" id={`gform_wrapper_${databaseId}`}>
			<div className="gform_anchor" id={`gf_${databaseId}`} />

			{formFields && (
				<FormProvider {...methods}>
					<form
						className={loading ? `gravityform gravityform--loading gravityform--id-${databaseId}` : `gravityform gravityform--id-${databaseId}`}
						id={`gform_${databaseId}`}
						key={`gform_-${databaseId}`}
						onSubmit={handleSubmit(onSubmitCallback)}
					>
						{generalError && <FormGeneralError errorCode={generalError} />}
						{pages?.length > 1 && <StepBanner steps={pages} currStepInd={currentPage} />}

						<div className="gform_body">
							<ul
								className={classnames(
									"gform_fields",
									{
										[`form_sublabel_${valueToLowerCase(subLabelPlacement)}`]: valueToLowerCase(subLabelPlacement),
									},
									`description_${valueToLowerCase(descriptionPlacement)}`,
									`${valueToLowerCase(labelPlacement)}`
								)}
								id={`gform_fields_${databaseId}`}
							>
								<FieldBuilder
									currentPage={currentPage + 1}
									databaseId={databaseId}
									formLoading={loading}
									formFields={formFields.nodes}
									formSettings={{ labelPlacement: labelPlacement || "ABOVE", subLabelPlacement: subLabelPlacement || "BELOW" }}
									preOnSubmit={preOnSubmit}
									presetValues={presetValues}
									settings={settings}
								/>
							</ul>
						</div>

						{pages.length > 1 && <StepNavigation currStepInd={currentPage} setStepIndex={handlePageIndChange} steps={pages} currStepComplete={isValid} />}

						{currentPage === pages.length - 1 && (
							<div className={`gform_footer ${valueToLowerCase(labelPlacement)}`}>
								<button className="gravityform__button gform_button button" disabled={loading || !isValid} id={`gform_submit_button_${databaseId}`} type="submit">
									{loading ? <span className="gravityform__button__loading_span">Loading</span> : submitButton?.text || "Submit"}
								</button>
							</div>
						)}
					</form>
				</FormProvider>
			)}
		</div>
	);
};

GravityFormForm.propTypes = {
	errorCallback: PropTypes.func,
	data: PropTypes.object.isRequired,
	successCallback: PropTypes.func,
	presetValues: PropTypes.shape({}),
};

export default GravityFormForm;
