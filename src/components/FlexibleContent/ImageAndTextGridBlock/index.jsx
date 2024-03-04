"use client";
import React from "react";
import { HTMLRender } from "@/components/helpers/htmlRender";
import { InView } from "react-intersection-observer";
import { v4 } from "uuid";
import GridImageBlock from "@/components/GridImageBlock";

import "./style.scss";

const ImageAndTextGridBlock = ({ blockData }) => {
    return (
        <>
            <div className={`image-grid-block image-grid-block--${blockData.gridPosition}`}>
                <div className="container">
                    <InView threshold="0.25" triggerOnce="true">
                        {({ inView, ref }) => (
                            <div className={`image-grid-block__text toZoomIn ${inView ? "zoomIn" : ""}`} ref={ref}>
                                <HTMLRender data={blockData.text} />
                            </div>
                        )}
                    </InView>
                    <div className="image-grid-block__image-grid">
                        {blockData.images.map((image) => {
                            return <GridImageBlock key={v4()} imageData={image} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageAndTextGridBlock;
