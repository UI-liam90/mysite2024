import { HTMLRender } from "~helpers/htmlRender";
import classNames from "classnames";
import FaqEl from "./FaqEl";
import { v4 } from "uuid";

import "./style.scss";

const FaqBlock = ({ blockData, blockContext }) => {
    const faqs = blockData.faqs;
    const half = Math.ceil(faqs.length / 2);

    const faqsOne = faqs.slice(0, half);
    const faqsTwo = faqs.slice(half);
    return (
        <div className="faq-block">
            {blockData.text && (
                <div className="faq-intro">
                    <HTMLRender data={blockData.text} />
                </div>
            )}
            <div className="faqs-columns">
                <div className="faqs-columns-one">
                    {faqsOne?.map((faq) => {
                        return <FaqEl key={v4()} faqData={faq} />;
                    })}
                </div>
                <div className="faqs-columns-two">
                    {faqsTwo?.map((faq) => {
                        return <FaqEl key={v4()} faqData={faq} />;
                    })}
                </div>
            </div>
        </div>
    );
};
export default FaqBlock;
