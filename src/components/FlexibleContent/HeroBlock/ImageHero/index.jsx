import { InView } from "react-intersection-observer";
import { WpImage } from "~helpers/WpImage";
import { HTMLRender } from "~helpers/htmlRender";
import LinkButton from "~components/LinkButton";

const ImageHero = ({ blockData }) => {
    return (
        <InView threshold="0.25" triggerOnce="true">
            {({ inView, ref }) => (
                <div ref={ref} className={`image-hero toZoomIn ${inView ? "zoomIn" : ""}`}>
                    <WpImage file={blockData.image} />
                    {blockData.overlay || blockData.button ? (
                        <InView threshold="0.25" triggerOnce="true">
                            {({ inView, ref }) => (
                                <div className={`hero-overlay toFadeIn ${inView ? "fadeIn" : ""}`} ref={ref}>
                                    {blockData.overlay && <HTMLRender data={blockData.overlay} />}
                                    <LinkButton type="primary" url={blockData.button.url} target={blockData.button.target}>
                                        {blockData.button.title}
                                    </LinkButton>
                                </div>
                            )}
                        </InView>
                    ) : null}
                </div>
            )}
        </InView>
    );
};
export default ImageHero;
