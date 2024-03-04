import { imageFragment, seoFragment } from "./dataFragments";
import { contactBlockFields } from "~components/FlexibleContent/ContactBlock/query";
import { countUpBlockFields } from "~components/FlexibleContent/CountUpBlock/query";
import { faqBlockFields } from "~components/FlexibleContent/FaqBlock/query";
import { galleryBlockFields } from "~components/FlexibleContent/GalleryBlock/query";
import { heroBlockFields } from "~components/FlexibleContent/HeroBlock/query";
import { iconBlockFields } from "~components/FlexibleContent/IconBlock/query";
import { imageAndTextBlockFields } from "~components/FlexibleContent/ImageAndTextBlock/query";
import { imageAndTextGridBlockFields } from "~components/FlexibleContent/ImageAndTextGridBlock/query";
import { meetTheTeamFields } from "~components/FlexibleContent/MeetTheTeamBlock/query";
import { newsAndTrendsBlockFields } from "~components/FlexibleContent/NewsAndTrendsBlock/query";
import { textBlockFields } from "~components/FlexibleContent/TextBlock/query";
import { twoColumnTextBlockFields } from "~components/FlexibleContent/TwoColumnTextBlock/query";
import { globalBuilderItems } from "~components/FlexibleContent/GlobalElementBlock";
import { globalFields } from "~components/FlexibleContent/globalQueries";
import GQLQuery from "~helpers/GQLQuery";

const pageQuery = `
    id
    content
    title
    date
    featuredImage {
        node {
          ${imageFragment}
        }
    }
    pageBuilder {
      blocks {
          ... on Page_Pagebuilder_Blocks_TextBlock {
              ${textBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_TextAndImageGridBlock {
              ${imageAndTextGridBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_TwoColumnTextBlock {
              ${twoColumnTextBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_TextAndImageBlock {
              ${imageAndTextBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_NewsAndTrendsBlock {
              ${newsAndTrendsBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_MeetTheTeamBlock {
              ${meetTheTeamFields}
          }
          ... on Page_Pagebuilder_Blocks_ContactBlock {
              ${contactBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_FaqBlock {
              ${faqBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_IconBlock {
              ${iconBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_CountUpBlock {
              ${countUpBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_GalleryBlock {
              ${galleryBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_HeroBanner {
              ${heroBlockFields}
          }
          ... on Page_Pagebuilder_Blocks_GlobalElementBlock {
              ${globalBuilderItems}
          }
      }
  }
    seo {
        ${seoFragment}
    }
`;

export async function getHomePage() {
    const query = {
        query: `
        query GetPage {
          page(id: "/", idType: URI) {
            ${pageQuery}
          }
        }
    `,
    };
    const responseBody = await GQLQuery(query);

    return responseBody;
}

export async function getPage(uri) {
    const query = {
        query: `
        query GetPageByUri {
            page(id: "${uri}", idType: URI) {
                ${pageQuery}
            }
            ${globalFields}
        }
    `,
    };
    const responseBody = await GQLQuery(query);

    return responseBody;
}

export async function getPageSlugs() {
    const query = {
        query: `query getPageSlugs {
        pages(first: 10000) {
          nodes {
            slug
          }
        }
      }`,
    };
    const responseBody = await GQLQuery(query);

    return responseBody.pages;
}
