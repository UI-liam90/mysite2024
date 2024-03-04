"use client";
import React, { Suspense } from "react";
import ConditionalWrapper from "~helpers/conditionalWrapper";

import "./style.scss";

const ImageHero = React.lazy(() => import("./ImageHero"));
const VideoHero = React.lazy(() => import("./VideoHero"));
const SliderHero = React.lazy(() => import("./SliderHero"));

const HeroBlock = ({ blockData }) => {
    return (
        <div className={`hero-block`}>
            <ConditionalWrapper condition={blockData.fullWidth !== "yes"} classes="container">
                <Suspense fallback={<div></div>}>
                    {blockData.heroType === "one-image" && <ImageHero blockData={blockData} />}
                    {blockData.heroType === "one-video" && <VideoHero blockData={blockData} />}
                    {blockData.heroType === "slider" && <SliderHero blockData={blockData} />}
                </Suspense>
            </ConditionalWrapper>
        </div>
    );
};
export default HeroBlock;
