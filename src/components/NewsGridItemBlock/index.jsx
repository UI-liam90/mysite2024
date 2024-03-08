import { WpImage } from "~helpers/WpImage";
import { useInView } from "react-intersection-observer";
import HTag from "~helpers/hTag";

import "./style.scss";

const NewsGridItemBlock = ({ headingType, postData }) => {
    const [newsRef, isVisible] = useInView({
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
        triggerOnce: true,
    });

    return (
        <div className={`news-grid-item toZoomIn ${isVisible ? "zoomIn" : ""}`} ref={newsRef}>
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
