import React, { Suspense } from "react";
import { v4 } from "uuid";
const TextBlock = React.lazy(() => import("./TextBlock/TextBlock.astro"));
const TwoColumnTextBlock = React.lazy(() => import("./TextAndImageGridBlock/TextAndImageGridBlock.astro"));
const ImageAndTextGridBlock = React.lazy(() => import("./ImageAndTextGridBlock"));
const ImageAndTextBlock = React.lazy(() => import("./ImageAndTextBlock"));
const NewsAndTrendsBlock = React.lazy(() => import("./NewsAndTrendsBlock/NewsAndTrendsBlock.astro"));
const MeetTheTeamBlock = React.lazy(() => import("./MeetTheTeamBlock/MeetTheTeamBlock.astro"));
const ContactBlock = React.lazy(() => import("./ContactBlock/ContactBlock.astro"));
const FaqBlock = React.lazy(() => import("./FaqBlock"));
const IconBlock = React.lazy(() => import("./IconBlock/IconBlock.astro"));
const CountUpBlock = React.lazy(() => import("./CountUpBlock"));
const GalleryBlock = React.lazy(() => import("./GalleryBlock"));
const HeroBlock = React.lazy(() => import("./HeroBlock/HeroBlock.astro"));
const GlobalElementBlock = React.lazy(() => import("./GlobalElementBlock/GlobalElementBlock.astro"));

const FlexibleContent = ({ blockData, contentType }) => {
    const blocks = blockData;
    return (
        <Suspense fallback={<div></div>}>
            {blocks &&
                blocks.map((block) => {
                    switch (block.fieldGroupName) {
                        case "Page_Pagebuilder_Blocks_GlobalElementBlock":
                            return <GlobalElementBlock key={v4()} blockData={block.elementToClone.pageBuilder.blocks} />;
                        case `${contentType}_Pagebuilder_Blocks_TextBlock`:
                            return <TextBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_TwoColumnTextBlock`:
                            return <TwoColumnTextBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_TextAndImageGridBlock`:
                            return <ImageAndTextGridBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_TextAndImageBlock`:
                            return <ImageAndTextBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_NewsAndTrendsBlock`:
                            return <NewsAndTrendsBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_MeetTheTeamBlock`:
                            return <MeetTheTeamBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_ContactBlock`:
                            return <ContactBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_FaqBlock`:
                            return <FaqBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_IconBlock`:
                            return <IconBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_CountUpBlock`:
                            return <CountUpBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_GalleryBlock`:
                            return <GalleryBlock key={v4()} blockData={block} />;
                        case `${contentType}_Pagebuilder_Blocks_HeroBanner`:
                            return <HeroBlock key={v4()} blockData={block} />;
                        default:
                            return null;
                    }
                })}
        </Suspense>
    );
};

export default FlexibleContent;
