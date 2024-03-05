"use client";
import React from "react";
import { HTMLRender } from "~helpers/htmlRender";
import { InView } from "react-intersection-observer";
import GridImageBlock from "~components/GridImageBlock";

import "./style.scss";

const ImageAndTextBlock = ({ blockData }) => {
    return (
        <>
            <div className={`text-image-block text-image-block--${blockData.gridPosition}`}>
                <div className="container">
                    <InView threshold="0.25" triggerOnce="true">
                        {({ inView, ref }) => (
                            <div className={`text-image-block__text toZoomIn ${inView ? "zoomIn" : ""}`} ref={ref}>
                                <HTMLRender data={blockData.text} />
                            </div>
                        )}
                    </InView>
                    <div className="text-image-block__image">{blockData.image && <GridImageBlock imageData={blockData.image} />}</div>
                </div>
            </div>
        </>
    );
};

export default ImageAndTextBlock;
