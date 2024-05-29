import React from "react";
import "./style.scss";

const StepNavigation = ({ currStepInd, setStepIndex, steps, currStepComplete }) => {
	const handleStepChange = (index) => {
		setStepIndex(index);
	};

	return (
		<div className={`steps-navigation ${currStepInd === steps.length - 1 ? "final-step" : `step-${currStepInd}`}`}>
			{currStepInd !== 0 && (
				<button className="button prev-nav" disabled={currStepInd > 0 ? false : true} onClick={() => handleStepChange(currStepInd - 1)} type="button">
					Previous
				</button>
			)}
			{currStepInd < steps.length - 1 && (
				<button className="button next-nav" disabled={currStepInd >= steps.length - 1 || !currStepComplete ? true : false} onClick={() => handleStepChange(currStepInd + 1)} type="button">
					Next
				</button>
			)}
		</div>
	);
};

export default StepNavigation;
