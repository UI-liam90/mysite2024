import { imageFragment, globalBlockSettingsFragment } from "~data/dataFragments";

export const newsAndTrendsBlockFields = /* GraphQL */ `
fieldGroupName
title
titleType
text
button {
    title
    url
}
numberOfPosts
newsCategory {
    nodes {
        ... on Category {
            id
            count
            contentNodes {
                nodes {
                    ... on Post {
                        id
                        title
                        uri
                        featuredImage {
                            node {
                                ${imageFragment}
                            }
                        }
                    }
                }
            }
        }
    }
}
${globalBlockSettingsFragment}
`;
