import React from "react";
import classnames from "classnames";

const Section = ({ fieldData, name, ...wrapProps }) => {
	const { cssClass, visibility, label, description } = fieldData;

	return (
		<div className={classnames("gravityform__section", cssClass, visibility === "HIDDEN" ? "hide" : "")}>
			{label && <h3 className="section-header">{label}</h3>}
			{description && <p>{description}</p>}
		</div>
	);
};

export default Section;
