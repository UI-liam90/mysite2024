import React from "react";
import classnames from "classnames";
import parse from "html-react-parser";

/**
 * This file manages all of the Gravity Forms input settings.
 * Things such as: Input Mask, Required, Visibility
 */

export function outputDescription(description, placement, currentPosition, errors) {
	if (description && currentPosition === placement) {
		return (
			<div
				className={`gravityforms__description gravityforms__description--${placement} gfield_description${errors ? " validation_error" : ""}`}
				dangerouslySetInnerHTML={{ __html: description }}
			/>
		);
	}
	return null;
}

export function islabelHidden(label) {
	return label === "hidden_label" ? true : false;
}

export function outputLabel(label, labelFor, labelPlacement, currentPosition, isRequired) {
	if (label && currentPosition === labelPlacement) {
		return (
			<label className={classnames("gravityform__label", "gfield_label", { "gfield_label--hide": labelPlacement && labelPlacement === "HIDDEN" ? true : false })} htmlFor={labelFor}>
				{label}
				{isRequired && parse('<span className="gfield_required">*</span>')}
			</label>
		);
	}
	return null;
}
