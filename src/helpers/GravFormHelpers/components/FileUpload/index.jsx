import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import InputWrapper from "../InputWrapper";
import strings from "../../utils/strings";
import { valueToLowerCase } from "../../utils/helpers";
import DropZone from "./DropZone";

const FileUpload = ({ fieldData, name, wrapClassName, wrapId }) => {
    const { cssClass, isRequired, type: typeUpper, canAcceptMultipleFiles, maxFiles } = fieldData;

    const type = valueToLowerCase(typeUpper);

    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <InputWrapper errors={errors?.[name] || {}} inputData={fieldData} labelFor={name} wrapClassName={wrapClassName} wrapId={wrapId}>
            <div className={classnames("gravityform__field__input", `gravityform__field__input__${type}`, cssClass, "fileupload")} aria-invalid={Boolean(errors?.[name])}>
                <Controller
                    render={({ field }) => <DropZone isRequired={isRequired} acceptMultiple={canAcceptMultipleFiles} maxFiles={maxFiles ? maxFiles : 0} name={name} {...field} ref={null} />}
                    name={name}
                    control={control}
                    rules={{ required: isRequired && strings.errors.required }}
                />
            </div>
        </InputWrapper>
    );
};

export default FileUpload;

FileUpload.propTypes = {
    fieldData: PropTypes.shape({
        cssClass: PropTypes.string,
        description: PropTypes.string,
        label: PropTypes.string,
        descriptionPlacement: PropTypes.string,
        isRequired: PropTypes.bool,
        type: PropTypes.string,
    }),
    name: PropTypes.string,
    wrapClassName: PropTypes.string,
    wrapId: PropTypes.string,
};
