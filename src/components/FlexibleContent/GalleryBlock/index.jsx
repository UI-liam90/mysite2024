import { useState } from "react";
import { HTMLRender } from "~helpers/htmlRender";
import { v4 } from "uuid";
import FsLightbox from "fslightbox-react";
import { InView } from "react-intersection-observer";
import { WpImage } from "~helpers/WpImage";

import "./style.scss";

const GalleryBlock = ({ blockData }) => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });

    if (blockData.displayGalleryAs === "normal") {
        const openLightboxOnSlide = (number) => {
            setLightboxController({
                toggler: !lightboxController.toggler,
                slide: number,
            });
        };
        const galleryImages = [];
        const images = blockData.galleryItems;
        images.forEach((item) => {
            let image = item.mediaItemUrl;
            galleryImages.push(image);
        });
        console.log(galleryImages);
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
                                                    onClick={() => openLightboxOnSlide(index + 1)}
                                                    onKeyDown={() => openLightboxOnSlide(index + 1)}
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
                    {blockData.showLightbox === "yes" && <FsLightbox toggler={lightboxController.toggler} sources={galleryImages} slide={lightboxController.slide} />}
                </div>
            </div>
        );
    } else if (blockData.displayGalleryAs === "mason") {
        const openLightboxOnSlide = (number) => {
            setLightboxController({
                toggler: !lightboxController.toggler,
                source: number,
            });
        };
        const galleryImages = [];
        const gridItems = blockData.masonGalleryItems;
        gridItems.forEach((item) => {
            let images = item.gridItemsOne;
            images.forEach((imageItem) => {
                let image = imageItem.mediaItemUrl;
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
                                {gridImages.map((image) => {
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
                                                            onClick={() => openLightboxOnSlide(imageData.images.fallback.src)}
                                                            onKeyDown={() => openLightboxOnSlide(imageData.images.fallback.src)}
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

                    {blockData.showLightbox === "yes" && <FsLightbox toggler={lightboxController.toggler} sources={galleryImages} source={lightboxController.source} />}
                </div>
            </div>
        );
    }
};
export default GalleryBlock;
