import React from "react";
import FlexibleContent from "..";
import { contactBlockFields } from "../ContactBlock/query";
import { countUpBlockFields } from "../CountUpBlock/query";
import { faqBlockFields } from "../FaqBlock/query";
import { galleryBlockFields } from "../GalleryBlock/query";
import { heroBlockFields } from "../HeroBlock/query";
import { iconBlockFields } from "../IconBlock/query";
import { imageAndTextBlockFields } from "../ImageAndTextBlock/query";
import { imageAndTextGridBlockFields } from "../ImageAndTextGridBlock/query";
import { meetTheTeamFields } from "../MeetTheTeamBlock/query";
import { newsAndTrendsBlockFields } from "../NewsAndTrendsBlock/query";
import { textBlockFields } from "../TextBlock/query";
import { twoColumnTextBlockFields } from "../TwoColumnTextBlock/query";

const GlobalElementBlock = ({ blockData }) => {
    const blocks = blockData;
    return <FlexibleContent blockData={blocks} contentType="GlobalElement" />;
};

export default GlobalElementBlock;

export const globalBuilderItems = /* GraphQL */ `
fieldGroupName
elementToClone {
    ... on GlobalElement {
        pageBuilder {
            blocks {
                ... on GlobalElement_Pagebuilder_Blocks_TextBlock {
                    ${textBlockFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_TwoColumnTextBlock {
                    ${twoColumnTextBlockFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_TextAndImageGridBlock {
                    ${imageAndTextGridBlockFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_TextAndImageBlock {
                    ${imageAndTextBlockFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_NewsAndTrendsBlock {
                    ${newsAndTrendsBlockFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_MeetTheTeamBlock {
                    ${meetTheTeamFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_ContactBlock {
                    ${contactBlockFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_FaqBlock {
                    ${faqBlockFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_IconBlock {
                    ${iconBlockFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_CountUpBlock {
                    ${countUpBlockFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_GalleryBlock {
                    ${galleryBlockFields}
                }
                ... on GlobalElement_Pagebuilder_Blocks_HeroBanner {
                    ${heroBlockFields}
                }
            }
        }
    }
}
`;
