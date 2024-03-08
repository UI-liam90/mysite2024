import { InView } from "react-intersection-observer";
import { WpImage } from "~helpers/WpImage";
import { HTMLRender } from "~helpers/htmlRender";

const IconEl = ({ iconData }) => {
    return (
        <InView threshold="0.25" triggerOnce="true">
            {({ inView, ref }) => (
                <div ref={ref} className={`icon-section toZoomIn ${inView ? "zoomIn" : ""}`}>
                    <div className="icon-section__image">
                        {/* Output the icon if it is a normal image format */}
                        {iconData.icon && <WpImage file={iconData.icon} />}
                        {/* Output the icon if it is a SVG */}
                        {iconData.iconSvg && <WpImage file={iconData.iconSvg} />}
                    </div>
                    <div className="icon-section__text">
                        <HTMLRender data={iconData.textArea} />
                    </div>
                </div>
            )}
        </InView>
    );
};
export default IconEl;
