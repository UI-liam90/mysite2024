import React from "react";
import LinkButton from "~components/LinkButton";
import { v4 } from "uuid";
import "./style.scss";

const BtnGroup = ({ btns }) => {
	if (!btns) return null;

	return (
		<div className="btn-group">
			{btns.map(({ buttonType, buttonLink }) => (
				<LinkButton url={buttonLink.url} type={buttonType} target={buttonLink.target} key={v4()}>
					{buttonLink.title}
				</LinkButton>
			))}
		</div>
	);
};

export default BtnGroup;
