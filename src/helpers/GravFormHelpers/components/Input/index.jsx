import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { useFormContext } from "react-hook-form";
import strings from "../../utils/strings";
import { valueToLowerCase } from "../../utils/helpers";
import InputWrapper from "../InputWrapper";

const inputTypeSettings = (type) => {
	switch (type) {
		case "PHONE":
			return {
				type: "tel",
			};
		case "DATE":
			return {
				type: "date",
				// validations: {
				// 	greaterThanToday: (v) => !v || new Date(v) > new Date() || "Select a date past todays date",
				// },
			};
		case "FILEUPLOAD":
			return {
				type: "file",
			};
		case "WEBSITE":
			return {
				type: "text",
				pattern: /https?:\/\/(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&\/\/=]*)/,
				patternMessage: strings.errors.urlPattern,
			};
		case "NUMBER":
			return {
				type: "number",
				pattern: /^[\d.]+$/,
				// props: {
				// 	step: "5.00",
				// },
			};
		default: {
			return {
				type,
				pattern: /^[a-zA-Z0-9_ ]*$/,
			};
		}
	}
};

const Input = ({ defaultValue, fieldData, name, formSettings, ...wrapProps }) => {
	const { cssClass, inputMaskValue, isRequired, maxLength, placeholder, size, type } = fieldData;

	const typeSettings = inputTypeSettings(type);

	const regex = inputMaskValue ? new RegExp(inputMaskValue) : typeSettings.pattern ? new RegExp(typeSettings.pattern) : false;

	const {
		register,
		formState: { errors },
	} = useFormContext();

	console.log(fieldData);

	return (
		<InputWrapper
			errors={errors?.[name] || {}}
			inputData={{ ...fieldData, labelPlacement: !fieldData.labelPlacement || fieldData.labelPlacement === "INHERIT" ? formSettings.labelPlacement : fieldData.labelPlacement }}
			labelFor={name}
			{...wrapProps}
		>
			<input
				aria-invalid={Boolean(errors?.[name])}
				aria-required={isRequired}
				className={classnames("gravityform__field__input", `gravityform__field__input__${valueToLowerCase(type)}`, cssClass, valueToLowerCase(size))}
				defaultValue={defaultValue}
				id={name}
				maxLength={maxLength || 524288} // 524288 = 512kb, avoids invalid prop type error if maxLength is undefined.
				name={name}
				placeholder={placeholder}
				{...register(name, {
					required: isRequired && strings.errors.required,
					maxlength: {
						value: maxLength > 0 && maxLength,
						message: maxLength > 0 && `${strings.errors.maxChar.front}  ${maxLength} ${strings.errors.maxChar.back}`,
					},
					pattern: {
						value: regex,
						message: typeSettings.patternMessage || strings.errors.pattern,
					},
					validate: typeSettings.validations,
				})}
				{...typeSettings.props}
				type={valueToLowerCase(typeSettings.type)}
			/>
		</InputWrapper>
	);
};

export default Input;

Input.propTypes = {
	defaultValue: PropTypes.string,
	fieldData: PropTypes.shape({
		cssClass: PropTypes.string,
		inputMaskValue: PropTypes.string,
		maxLength: PropTypes.number,
		placeholder: PropTypes.string,
		isRequired: PropTypes.bool,
		type: PropTypes.string,
		size: PropTypes.string,
	}),
	value: PropTypes.string,
	name: PropTypes.string,
	wrapProps: PropTypes.object,
};
