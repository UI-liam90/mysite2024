import classnames from "classnames";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { valueToLowerCase } from "../../../utils/helpers";

const SelectEl = ({ defaultValue, fieldData, name, errors }) => {
    const { choices, cssClass, isRequired, size, placeholder } = fieldData;
    const [selectValue, setSelectValue] = useState(0);
    const { setValue } = useFormContext();

    useEffect(() => {
        setValue(name, defaultValue);
        setSelectValue(defaultValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValue]);

    return (
        <select
            aria-invalid={errors}
            aria-required={isRequired}
            className={classnames("gravityform__field__input", "gravityform__field__input__select", "gfield_select", cssClass, valueToLowerCase(size))}
            id={name}
            name={name}
            value={selectValue}
            onChange={(e) => {
                setValue(name, e.target.value);
                setSelectValue(e.target.value);
            }}
        >
            <option value="0">{placeholder ? placeholder : "Please Select"}</option>
            {choices.map(({ isSelected, text, value }, index) => {
                return (
                    <option key={`${name}-${index}`} value={value}>
                        {text}
                    </option>
                );
            })}
        </select>
    );
};

export default SelectEl;

SelectEl.propTypes = {
    fieldData: PropTypes.shape({
        choices: PropTypes.array,
        cssClass: PropTypes.string,
        isRequired: PropTypes.bool,
        size: PropTypes.string,
    }),
    register: PropTypes.func,
    wrapProps: PropTypes.object,
};
