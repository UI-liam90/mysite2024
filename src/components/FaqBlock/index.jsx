import { HTMLRender } from "~helpers/htmlRender";
import classNames from "classnames";
import FaqEl from "./FaqEl";
import { v4 } from "uuid";

import "./style.scss";

const FaqBlock = ({ blockData, blockContext }) => {
    const classList = classNames("faq-block", {
        "context-multi": blockContext === "multi",
        "bg-colour-black": blockData.blockBackgroundColour === "black",
        "bg-colour-white": blockData.blockBackgroundColour === "white",
        "bg-colour-brand-1": blockData.blockBackgroundColour === "brand-1",
        "bg-colour-brand-2": blockData.blockBackgroundColour === "brand-2",
        "bg-colour-brand-3": blockData.blockBackgroundColour === "brand-3",
        "text-colour-black": blockData.blockTextColour === "black",
        "text-colour-white": blockData.blockTextColour === "white",
        "text-colour-brand-1": blockData.blockTextColour === "brand-1",
        "text-colour-brand-2": blockData.blockTextColour === "brand-2",
        "text-colour-brand-3": blockData.blockTextColour === "brand-3",
    });
    const faqs = blockData.faqs;
    const half = Math.ceil(faqs.length / 2);

    const faqsOne = faqs.slice(0, half);
    const faqsTwo = faqs.slice(half);
    return (
        <div id={blockData.blockId} className={classList}>
            <div className={classNames({ container: blockData.blockWidth === "contain" }, { "container-wide": blockData.blockWidth === "wide" })}>
                <div className="faq-intro">
                    <HTMLRender data={blockData.text} />
                </div>
                <div className="faqs-columns">
                    <div className="faqs-columns-one">
                        {faqsOne.map((faq) => {
                            return <FaqEl key={v4()} faqData={faq} />;
                        })}
                    </div>
                    <div className="faqs-columns-two">
                        {faqsTwo.map((faq) => {
                            return <FaqEl key={v4()} faqData={faq} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FaqBlock;
