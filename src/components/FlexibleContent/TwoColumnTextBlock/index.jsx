"use client";
import React from "react";
import { HTMLRender } from "@/components/helpers/htmlRender";

import "./style.scss";

const TwoColumnTextBlock = ({ blockData }) => {
    return (
        <>
            <div className="two-column-text-block">
                <div className="container">
                    <div className="two-column-text-block__column-one">
                        <HTMLRender data={blockData.columnOneWysiwyg} />
                    </div>
                    <div className="two-column-text-block__column-two">
                        <HTMLRender data={blockData.columnTwoWysiwyg} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TwoColumnTextBlock;
