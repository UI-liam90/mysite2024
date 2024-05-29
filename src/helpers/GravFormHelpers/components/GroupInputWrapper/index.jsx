import React from "react";
import classnames from "classnames";
import { outputDescription } from "../../utils/inputSettings";
import parse from "html-react-parser";

const GroupInputWrapper = ({ children, inputData: { cssClass, description, descriptionPlacement, isRequired, label, labelPlacement, maxLength, type }, labelFor, wrapClassName }) => {
	return (
		<li className={classnames(wrapClassName, cssClass, "inputs-wrapper")}>
			<label className={classnames("gravityform__label", "gfield_label", { "gfield_label--hide": labelPlacement && labelPlacement === "HIDDEN" ? true : false })} htmlFor={labelFor}>
				{label}
				{isRequired && parse('<span className="gfield_required">*</span>')}
			</label>
			{outputDescription(description, descriptionPlacement, "above")}
			{children}
			{outputDescription(description, descriptionPlacement, "below")}
		</li>
	);
};

export default GroupInputWrapper;
