import React, { useState } from "react";
import classNames from "classnames";
import { HTMLRender } from "~helpers/htmlRender";
import Lightbox from "yet-another-react-lightbox";
import { WpImage } from "~helpers/WpImage";

import "yet-another-react-lightbox/styles.css";
import "./style.scss";

const GalleryBlock = ({ blockData, blockContext }) => {
    const [index, setIndex] = useState(-1);
    const showLightbox = blockData.showLightbox === "yes" ? true : false;
    const classList = classNames("gallery-block", `gallery-block--${blockData.displayGalleryAs}`, {
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
        "gallery-block--lightbox": showLightbox,
    });
    if (blockData.displayGalleryAs === "normal") {
        const galleryImages = [];
        const images = blockData.galleryItems.nodes;
        images.forEach((item) => {
            let image = { src: item.mediaItemUrl };
            galleryImages.push(image);
        });
        return (
            <div className={classList}>
                <div className={classNames({ container: blockData.blockWidth === "contain" }, { "container-wide": blockData.blockWidth === "wide" })}>
                    <HTMLRender data={blockData.text} />
                    <div className="gallery-grid">
                        {images.map((image, index) => {
                            return (
                                <div key={index}>
                                    {blockData.showLightbox === "yes" ? (
                                        <div role="button" tabIndex={0} className={`gallery-image`} onClick={() => setIndex(index)} onKeyDown={() => setIndex(index)} aria-label={image.title}>
                                            <WpImage file={image} />
                                        </div>
                                    ) : (
                                        <div className={`gallery-image`} aria-label={image.title}>
                                            <WpImage file={image} />
                                        </div>
                                    )}
                                </div>
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
            let images = item.gridItemsOne.nodes;
            images.forEach((item) => {
                let image = { src: item.mediaItemUrl };
                galleryImages.push(image);
            });
        });
        return (
            <div className={classList}>
                <div className={classNames({ container: blockData.blockWidth === "contain" }, { "container-wide": blockData.blockWidth === "wide" })}>
                    <HTMLRender data={blockData.text} />

                    {gridItems.map((item, index) => {
                        let gridImages = item.gridItemsOne.nodes;
                        return (
                            <div key={index} className={`gallery-grid gallery-grid--type-${item.gridType} ${item.gridDirection === "right" ? "gallery-grid--direction-right" : ""}`}>
                                {gridImages.map((image, index) => {
                                    let imageData = image.mediaItemUrl;
                                    return (
                                        <React.Fragment key={index}>
                                            {blockData.showLightbox === "yes" ? (
                                                <div role="button" tabIndex={0} className={`gallery-image`} onClick={() => setIndex(index)} onKeyDown={() => setIndex(index)} aria-label={image.title}>
                                                    <WpImage file={image} />
                                                </div>
                                            ) : (
                                                <div className={`gallery-image`} aria-label={image.title}>
                                                    <WpImage file={image} />
                                                </div>
                                            )}
                                        </React.Fragment>
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
