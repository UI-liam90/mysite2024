import { imageFragment, seoFragment } from "./dataFragments";
import { pageBuilderBlocks } from "./pageBuilder";
import { globalBuilderItems } from "~components/GlobalElementBlock/query";
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
    seo {
        ${seoFragment}
    }
    pageBuilder {
        blocks {
            ${pageBuilderBlocks}
            ... on PageBuilderBlocksGlobalElementBlockLayout {
                ${globalBuilderItems}
            }
        }
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
