import React from "react";
import InputWrapper from "../InputWrapper";
import { useFormContext } from "react-hook-form";
import classnames from "classnames";
import { valueToLowerCase } from "../../utils/helpers";
import strings from "../../utils/strings";
import { v4 } from "uuid";

const Name = ({ defaultValue, fieldData, name, ...wrapProps }) => {
	const { cssClass, inputMaskValue, isRequired, maxLength, placeholder, size, type, inputs } = fieldData;

	const {
		register,
		formState: { errors },
	} = useFormContext();

	const regex = inputMaskValue ? new RegExp(inputMaskValue) : /\w[a-zA-Z]/;

	return (
		<ul className="name-inputs-grp inputs">
			{inputs.map((input) => {
				if (input.isHidden) return null;

				const fieldName = `${name}_${input.key}`;
				if (!input.isHidden) {
					return (
						<InputWrapper
							errors={errors?.[name]?.[input.key] || {}}
							inputData={{ ...input, isRequired: isRequired, label: input.customLabel || input.label }}
							labelFor={fieldName}
							{...wrapProps}
							key={v4()}
						>
							<input
								aria-invalid={Boolean(errors?.[name])}
								aria-required={isRequired}
								className={classnames("gravityform__field__input", `gravityform__field__input__${valueToLowerCase(type)}`, cssClass, valueToLowerCase(size))}
								defaultValue={defaultValue}
								id={fieldName}
								maxLength={maxLength || 524288} // 524288 = 512kb, avoids invalid prop type error if maxLength is undefined.
								name={fieldName}
								placeholder={input.placeholder}
								{...register(`${name}.${input.key}`, {
									required: isRequired && strings.errors.required,
									maxlength: {
										value: maxLength > 0 && maxLength,
										message: maxLength > 0 && `${strings.errors.maxChar.front}  ${maxLength} ${strings.errors.maxChar.back}`,
									},
									pattern: {
										value: regex,
										message: regex && strings.errors.pattern,
									},
								})}
								type={valueToLowerCase(type)}
							/>
						</InputWrapper>
					);
				}
			})}
		</ul>
	);
};

export default Name;
