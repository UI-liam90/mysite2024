import classnames from "classnames";
import { useFormContext } from "react-hook-form";
import Captcha from "../../components/Captcha";
import Html from "../../components/Html";
import Input from "../../components/Input";
import Multiselect from "../../components/Multiselect";
import Select from "../../components/Select";
import SelectorList from "../../components/SelectorList";
import Textarea from "../../components/Textarea";
import FileUpload from "../../components/FileUpload";
import Consent from "../../components/Consent";
import Name from "~helpers/GravFormHelpers/components/Name";
import Address from "~helpers/GravFormHelpers/components/Address";
import { valueToLowerCase } from "../../utils/helpers";
import { islabelHidden } from "../../utils/inputSettings";
import Section from "~helpers/GravFormHelpers/components/Section";

const FieldBuilder = ({ databaseId, formFields, formLoading, preOnSubmit, presetValues, settings, formSettings, currentPage }) => {
	// Loop through fields and create
	return formFields.map((field) => {
		if (field.pageNumber !== currentPage) return null;

		// Set the wrapper classes
		const { id, captchaTheme, descriptionPlacement, isRequired, subLabelPlacement, labelPlacement, type, size, visibility } = field;

		let inputWrapperClass = classnames(
			"gfield",
			"gravityform__field",
			"gravityform__field__" + valueToLowerCase(type),
			{ [`gravityform__field--${valueToLowerCase(size)}`]: size },
			field.cssClass,
			{ "field-required": isRequired },
			{ "hidden-label": islabelHidden(labelPlacement) },
			{ gfield_contains_required: isRequired },
			{
				[`field_sublabel_${valueToLowerCase(subLabelPlacement)}`]: valueToLowerCase(subLabelPlacement),
			},
			{
				[`field_description_${valueToLowerCase(descriptionPlacement)}`]: descriptionPlacement,
			},
			`gfield_visibility_${visibility ? valueToLowerCase(visibility) : "hidden"}`
		);

		const wrapId = `field_${databaseId}_${id}`;

		//TODO: Should this match GF version "input_form.id_input.id"
		const inputName = `input_${field.id}`;

		const defaultValue = presetValues?.[inputName] || field?.defaultValue || "";

		switch (field.type) {
			// Add note for unsupported captcha field
			case "CAPTCHA":
				return (
					<Captcha
						captchaTheme={captchaTheme}
						fieldData={field}
						gfId={id}
						key={id}
						name={inputName}
						ref={preOnSubmit}
						settings={settings?.recaptcha}
						wrapClassName={inputWrapperClass}
						formSettings={formSettings}
					/>
				);
			case "HTML":
				return <Html fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} formSettings={formSettings} />;
			// Start with the standard fields
			case "TEXT":
			case "NUMBER":
			case "EMAIL":
			case "HIDDEN":
			case "DATE":
			case "PHONE":
			case "WEBSITE":
				return <Input fieldData={field} key={id} gfId={id} name={inputName} defaultValue={defaultValue} wrapClassName={inputWrapperClass} wrapId={wrapId} formSettings={formSettings} />;
			case "CONSENT":
				return <Consent fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} formSettings={formSettings} />;
			case "TEXTAREA":
				return <Textarea fieldData={field} defaultValue={defaultValue} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} formSettings={formSettings} />;
			case "SELECT":
				return <Select fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} defaultValue={defaultValue} wrapId={wrapId} formSettings={formSettings} />;
			case "MULTISELECT":
				return <Multiselect fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} formSettings={formSettings} />;
			case "RADIO":
			case "CHECKBOX":
				return <SelectorList fieldData={field} key={id} gfId={id} name={inputName} defaultValue={defaultValue} wrapClassName={inputWrapperClass} wrapId={wrapId} formSettings={formSettings} />;
			case "FILEUPLOAD":
				return <FileUpload fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} formSettings={formSettings} />;
			case "NAME":
				return <Name fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} formSettings={formSettings} />;
			case "ADDRESS":
				return <Address fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} formSettings={formSettings} />;
			case "SECTION":
				return <Section fieldData={field} key={id} wrapId={wrapId} formSettings={formSettings} />;
			default:
				return null;
		}
	});
};

export default FieldBuilder;
