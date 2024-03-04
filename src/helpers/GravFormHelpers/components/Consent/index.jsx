import React from "react";
import classnames from "classnames";
import InputWrapper from "../InputWrapper";
import { useFormContext } from "react-hook-form";
import strings from "../../utils/strings";
import { HTMLRender } from "~helpers/htmlRender";

const Consent = ({ fieldData, name, ...wrapProps }) => {
    const { cssClass, isRequired, type, checkboxLabel } = fieldData;

    let inputType = type.toLowerCase();

    const {
        register,
        formState: { errors },
    } = useFormContext();
    console.log(checkboxLabel);
    return (
        <InputWrapper errors={errors?.[name] || {}} inputData={fieldData} labelFor={name} {...wrapProps}>
            <input
                className={classnames(`gravityform__field__input__${inputType}`, cssClass)}
                id={name}
                {...register(name, {
                    required: isRequired && strings.errors.required,
                })}
                type={"checkbox"}
                name={name}
            />
            <label htmlFor={`${name}`}>
                <span>{<HTMLRender data={checkboxLabel} />}</span>
            </label>
        </InputWrapper>
    );
};

export default Consent;
