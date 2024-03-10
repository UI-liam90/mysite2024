import { WpImage } from "~helpers/WpImage";
import HTag from "~helpers/hTag";

import "./style.scss";

const NewsGridItemBlock = ({ headingType, postData }) => {
    return (
        <div className={`news-grid-item`}>
            <a href={postData.uri} aria-label={postData.title}>
                {postData?.featuredImage && <WpImage file={postData?.featuredImage.node} />}

                <HTag type={headingType} className="news-grid-item__title title-five">
                    {postData.title}
                </HTag>
            </a>
        </div>
    );
};

export default NewsGridItemBlock;
