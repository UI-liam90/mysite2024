import { WpImage } from "~helpers/WpImage";
import { useInView } from "react-intersection-observer";

const GridImageBlock = ({ imageData }) => {
    const [imageRef, isVisible] = useInView({
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <div className={`image-block toZoomIn ${isVisible ? "zoomIn" : ""}`} ref={imageRef}>
            <WpImage file={imageData} />
        </div>
    );
};

export default GridImageBlock;
