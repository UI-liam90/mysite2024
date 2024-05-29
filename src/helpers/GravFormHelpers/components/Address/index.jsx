import React from "react";
import classnames from "classnames";
import InputWrapper from "../InputWrapper";
import { useFormContext } from "react-hook-form";
import strings from "../../utils/strings";
import { valueToLowerCase } from "../../utils/helpers";
import { v4 } from "uuid";
import GroupInputWrapper from "../GroupInputWrapper";

const Address = ({ fieldData, name, formSettings, ...wrapProps }) => {
	const { cssClass, isRequired, type, inputs, subLabelPlacement } = fieldData;

	const {
		register,
		formState: { errors },
	} = useFormContext();

	const getInputSettings = (key) => {
		switch (key) {
			case "zip":
				return {
					regex: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
				};
			default:
				return {
					regex: /\w[a-zA-Z0-9 ]/g,
				};
		}
	};

	if (!inputs || inputs.length === 0) return null;

	return (
		<GroupInputWrapper inputData={fieldData} labelFor={name} wrapClassName="address-inputs-wrapper">
			<ul className={`${name}-inputs address-inputs-grp inputs`}>
				{inputs.map((input) => {
					if (input.isHidden) return null;

					const inputSettings = getInputSettings(input.key);
					const fieldName = `${name}_${input.key}`;

					return (
						<InputWrapper
							errors={errors?.[name]?.[input.key] || {}}
							inputData={{
								...input,
								isRequired: isRequired,
								label: input.customLabel || input.label,
								labelPlacement: !subLabelPlacement || subLabelPlacement === "INHERIT" ? formSettings.subLabelPlacement : subLabelPlacement,
							}}
							labelFor={fieldName}
							{...wrapProps}
							key={v4()}
						>
							<input
								aria-invalid={Boolean(errors?.[name]?.[input.key])}
								aria-required={isRequired}
								className={classnames("gravityform__field__input", `gravityform__field__input__${valueToLowerCase(type)}`, cssClass)}
								defaultValue={input.defaultValue}
								id={fieldName}
								name={fieldName}
								placeholder={input.placeholder}
								{...register(`${name}.${input.key}`, {
									required: isRequired && strings.errors.required,
									pattern: {
										value: inputSettings.regex,
										message: inputSettings.regex && strings.errors.pattern,
									},
								})}
								type="text"
							/>
						</InputWrapper>
					);
				})}
			</ul>
		</GroupInputWrapper>
	);
};
export default Address;
