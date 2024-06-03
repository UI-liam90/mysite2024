import { useState } from "react";
import { HTMLRender } from "~helpers/htmlRender";
import { InView } from "react-intersection-observer";

const FaqEl = ({ faqData }) => {
	const [faqStatus, setFaqStatus] = useState("closed");

	const toggleFaq = () => {
		let currentFaqStatus = faqStatus;
		if (currentFaqStatus === "closed") {
			setFaqStatus("open");
		} else {
			setFaqStatus("closed");
		}
	};
	return (
		<InView threshold="0.25" triggerOnce="true">
			{({ inView, ref }) => (
				<div ref={ref} className={`faq-section faq-section--${faqStatus} toZoomIn ${inView ? "zoomIn" : ""}`}>
					<div className="faq-section__question" onClick={() => toggleFaq()} onKeyDown={() => toggleFaq()} role="button" tabIndex={0}>
						<div className="faq-section__question-text">
							<h3 className="title-five">{faqData.question && <HTMLRender data={faqData.question} />}</h3>
						</div>
						<div className="faq-section__question-icon">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor">
								<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
							</svg>
						</div>
					</div>
					<div className="faq-section__answer">{faqData.answer && <HTMLRender data={faqData.answer} />}</div>
				</div>
			)}
		</InView>
	);
};
export default FaqEl;
