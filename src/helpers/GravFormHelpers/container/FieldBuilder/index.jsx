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
import Name from "../../components/Name";
import { valueToLowerCase } from "../../utils/helpers";
import { islabelHidden } from "../../utils/inputSettings";
//import { AppContext } from "@/context/AppContext";

const FieldBuilder = ({ databaseId, formFields, formLoading, preOnSubmit, presetValues, settings }) => {
    //get global state of preset values
    //const { reset } = useFormContext();
    // useEffect(() => {
    //     reset(formValues[databaseId]);

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    // useEffect(() => {
    //     reset(formValues[databaseId]);

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [formValues]);

    // useEffect(() => {
    //     handleFormValues(databaseId, presetValues);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [presetValues]);

    // Loop through fields and create
    return formFields.map((field) => {
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
                return <Captcha captchaTheme={captchaTheme} fieldData={field} gfId={id} key={id} name={inputName} ref={preOnSubmit} settings={settings?.recaptcha} wrapClassName={inputWrapperClass} />;
            case "HTML":
                return <Html fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} />;
            // Start with the standard fields
            case "TEXT":
            case "NUMBER":
            case "EMAIL":
            case "HIDDEN":
            case "DATE":
            case "PHONE":
                return <Input fieldData={field} key={id} gfId={id} name={inputName} defaultValue={defaultValue} wrapClassName={inputWrapperClass} wrapId={wrapId} />;
            case "NAME":
                return <Name fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} />;
            case "CONSENT":
                return <Consent fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} />;
            case "TEXTAREA":
                return <Textarea fieldData={field} defaultValue={defaultValue} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} />;
            case "SELECT":
                return <Select fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} defaultValue={defaultValue} wrapId={wrapId} />;
            case "MULTISELECT":
                return <Multiselect fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} />;
            case "RADIO":
            case "CHECKBOX":
                return <SelectorList fieldData={field} key={id} gfId={id} name={inputName} defaultValue={defaultValue} wrapClassName={inputWrapperClass} wrapId={wrapId} />;
            case "FILEUPLOAD":
                return <FileUpload fieldData={field} key={id} gfId={id} name={inputName} wrapClassName={inputWrapperClass} wrapId={wrapId} />;

            default:
                return null;
        }
    });
};

export default FieldBuilder;
