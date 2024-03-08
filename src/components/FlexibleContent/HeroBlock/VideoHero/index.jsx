import { InView } from "react-intersection-observer";
import { HTMLRender } from "~helpers/htmlRender";
import LinkButton from "~components/LinkButton";

const VideoHero = ({ blockData }) => {
    return (
        <InView threshold="0.25" triggerOnce="true">
            {({ inView, ref }) => (
                <div ref={ref} className={`video-hero toZoomIn ${inView ? "zoomIn" : ""}`}>
                    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                    <video
                        src={blockData.video.mediaItemUrl}
                        autoPlay={blockData.autoplay === "yes" ? "true" : false}
                        playsInline={blockData.autoplay === "yes" ? "true" : false}
                        controls={blockData.showControls === "yes" ? true : false}
                        muted={blockData.muted === "yes" ? true : false}
                        loop={blockData.loop === "yes" ? true : false}
                    ></video>
                    {blockData.overlay || blockData.button ? (
                        <div className="hero-overlay">
                            {blockData.overlay && <HTMLRender data={blockData.overlay} />}
                            <LinkButton type="primary" url={blockData.button.url} target={blockData.button.target}>
                                {blockData.button.title}
                            </LinkButton>
                        </div>
                    ) : null}
                </div>
            )}
        </InView>
    );
};
export default VideoHero;
