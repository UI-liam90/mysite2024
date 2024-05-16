import React from "react";
import { v4 } from "uuid";
import ScreenVisibility from "~helpers/ScreenVisibility";
import "./style.scss";

const StepBanner = ({ steps, currStepInd }) => {
	return (
		<>
			<h2 className="step-title">{steps[currStepInd].pageName}</h2>
			<div className="step-banner">
				{steps.map((step, i) => (
					<div className={`step-banner-item ${i === currStepInd ? "active" : ""}`} key={v4()}>
						<span className="step-banner-item-content">
							<span className="step-number">{i + 1}</span>
							<ScreenVisibility hiddenMQ={"(max-width: 769px)"}>{step.pageName && <span className="step-name">{step.pageName}</span>}</ScreenVisibility>
						</span>
					</div>
				))}
			</div>
		</>
	);
};

export default StepBanner;
