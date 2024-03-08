import { useState } from "react";
import { HTMLRender } from "~helpers/htmlRender";
import { v4 } from "uuid";
import Lightbox from "yet-another-react-lightbox";
import { InView } from "react-intersection-observer";
import { WpImage } from "~helpers/WpImage";

import "yet-another-react-lightbox/styles.css";
import "./style.scss";

const GalleryBlock = ({ blockData }) => {
    const [index, setIndex] = useState(-1);

    if (blockData.displayGalleryAs === "normal") {
        const galleryImages = [];
        const images = blockData.galleryItems;
        images.forEach((item) => {
            let image = { src: item.mediaItemUrl };
            galleryImages.push(image);
        });
        return (
            <div
                className={`gallery-block gallery-block--${blockData.displayGalleryAs} ${blockData.fullWidth === "yes" ? "gallery-block--full-width" : ""} ${
                    blockData.showLightbox === "yes" ? "gallery-block--lightbox" : ""
                }`}
            >
                <div className="container">
                    <HTMLRender data={blockData.text} />
                    <div className="gallery-grid">
                        {images.map((image, index) => {
                            return (
                                <InView key={v4()} threshold="0.25" triggerOnce="true">
                                    {({ inView, ref }) => (
                                        <>
                                            {blockData.showLightbox === "yes" ? (
                                                <div
                                                    role="button"
                                                    tabIndex={0}
                                                    ref={ref}
                                                    className={`gallery-image toZoomIn ${inView ? "zoomIn" : ""}`}
                                                    onClick={() => setIndex(index)}
                                                    onKeyDown={() => setIndex(index)}
                                                    aria-label={image.title}
                                                >
                                                    <WpImage file={image} />
                                                </div>
                                            ) : (
                                                <div ref={ref} className={`gallery-image toZoomIn ${inView ? "zoomIn" : ""}`} aria-label={image.title}>
                                                    <WpImage file={image} />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </InView>
                            );
                        })}
                    </div>
                    {blockData.showLightbox === "yes" && <Lightbox index={index} slides={galleryImages} open={index >= 0} close={() => setIndex(-1)} />}
                </div>
            </div>
        );
    } else if (blockData.displayGalleryAs === "mason") {
        const galleryImages = [];
        const gridItems = blockData.masonGalleryItems;
        gridItems.forEach((item) => {
            let images = item.gridItemsOne;
            images.forEach((item) => {
                let image = { src: item.mediaItemUrl };
                galleryImages.push(image);
            });
        });
        return (
            <div
                className={`gallery-block gallery-block--${blockData.displayGalleryAs} ${blockData.fullWidth === "yes" ? "gallery-block--full-width" : ""} ${
                    blockData.showLightbox === "yes" ? "gallery-block--lightbox" : ""
                }`}
            >
                <div className="container">
                    <HTMLRender data={blockData.text} />

                    {gridItems.map((item) => {
                        let gridImages = item.gridItemsOne;
                        return (
                            <div key={v4()} className={`gallery-grid gallery-grid--type-${item.gridType} ${item.gridDirection === "right" ? "gallery-grid--direction-right" : ""}`}>
                                {gridImages.map((image, index) => {
                                    let imageData = image.mediaItemUrl;
                                    return (
                                        <InView key={v4()} threshold="0.25" triggerOnce="true">
                                            {({ inView, ref }) => (
                                                <>
                                                    {blockData.showLightbox === "yes" ? (
                                                        <div
                                                            role="button"
                                                            tabIndex={0}
                                                            ref={ref}
                                                            className={`gallery-image toZoomIn ${inView ? "zoomIn" : ""}`}
                                                            onClick={() => setIndex(index)}
                                                            onKeyDown={() => setIndex(index)}
                                                            aria-label={image.title}
                                                        >
                                                            <WpImage file={image} />
                                                        </div>
                                                    ) : (
                                                        <div ref={ref} className={`gallery-image toZoomIn ${inView ? "zoomIn" : ""}`} aria-label={image.title}>
                                                            <WpImage file={image} />
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </InView>
                                    );
                                })}
                            </div>
                        );
                    })}

                    {blockData.showLightbox === "yes" && <Lightbox index={index} slides={galleryImages} open={index >= 0} close={() => setIndex(-1)} />}
                </div>
            </div>
        );
    }
};
export default GalleryBlock;
