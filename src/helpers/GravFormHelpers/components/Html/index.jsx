import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import InputWrapper from "../InputWrapper";
import { valueToLowerCase } from "../../utils/helpers";

const Html = ({ fieldData, name, wrapClassName, formSettings, ...wrapProps }) => {
	const { content, cssClass, type } = fieldData;

	return (
		<InputWrapper
			{...wrapProps}
			inputData={{ ...fieldData, labelPlacement: !fieldData.labelPlacement || fieldData.labelPlacement === "INHERIT" ? formSettings.labelPlacement : fieldData.labelPlacement }}
			labelFor={name}
			wrapClassName={classnames(wrapClassName, "gfield_html", "gfield_html_formatted", "gfield_no_follows_desc", "gravityform__" + valueToLowerCase(type) + "__wrap", cssClass)}
		>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</InputWrapper>
	);
};

export default Html;

Html.propTypes = {
	fieldData: PropTypes.shape({
		cssClass: PropTypes.string,
		content: PropTypes.string,
		type: PropTypes.string,
	}),
	name: PropTypes.string,
	wrapClassName: PropTypes.string,
	wrapProps: PropTypes.object,
};
