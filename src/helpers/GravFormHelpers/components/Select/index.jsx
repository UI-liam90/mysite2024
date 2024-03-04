import PropTypes from "prop-types";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import InputWrapper from "../InputWrapper";
import strings from "../../utils/strings";
import SelectEl from "./SelectElement";

const Select = ({ defaultValue, fieldData, name, ...wrapProps }) => {
    const { isRequired } = fieldData;
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <InputWrapper errors={errors?.[name] || {}} inputData={fieldData} labelFor={name} {...wrapProps}>
            <Controller
                control={control}
                name={name}
                render={({ field }) => <SelectEl errors={errors} defaultValue={defaultValue} fieldData={fieldData} name={name} {...field} ref={null} />}
                rules={{ required: isRequired && strings.errors.required }}
            />
        </InputWrapper>
    );
};

export default Select;

Select.propTypes = {
    fieldData: PropTypes.shape({
        choices: PropTypes.array,
        cssClass: PropTypes.string,
        isRequired: PropTypes.bool,
        size: PropTypes.string,
    }),
    register: PropTypes.func,
    wrapProps: PropTypes.object,
};
