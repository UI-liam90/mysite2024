"use client";
import React from "react";
import { v4 } from "uuid";
import { InView } from "react-intersection-observer";
import NewsGridItemBlock from "@/components/NewsGridItemBlock";
import HTag from "@/components/helpers/hTag";
import LinkButton from "@/components/LinkButton";
import { HTMLRender } from "@/components/helpers/htmlRender";
import "./style.scss";

const NewsAndTrendsBlock = ({ blockData }) => {
    let newsNodes = blockData?.newsCategory?.contentNodes?.nodes;
    if (!newsNodes || newsNodes.length === 0) {
        newsNodes = blockData.posts.nodes;
    }
    return (
        <>
            <div className="news-trends-block">
                <div className="container">
                    <InView threshold={0.25} triggerOnce="true">
                        {({ inView, ref }) => (
                            <div className={`news-trends-block__text toZoomIn ${inView ? "zoomIn" : ""}`} ref={ref}>
                                <HTag type={blockData.titleType}>{blockData.title}</HTag>
                                <HTMLRender data={blockData.text} />
                                {blockData.button.url && (
                                    <LinkButton type="secondary" size="large" url={blockData.button.url}>
                                        {blockData.button.title}
                                    </LinkButton>
                                )}
                            </div>
                        )}
                    </InView>
                    <div className="news-trends-block__news-grid">
                        {newsNodes.slice(0, blockData.numberOfPosts).map((post) => (
                            <NewsGridItemBlock headingType="h2" key={v4()} postData={post} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsAndTrendsBlock;
