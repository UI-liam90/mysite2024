import { imageFragment } from "~data/dataFragments";

export const newsAndTrendsBlockFields = /* GraphQL */ `
fieldGroupName
title
titleType
text
newsCategory {
    id
}
button {
    title
    url
}
numberOfPosts
newsCategory {
    id
    count
    contentNodes {
        nodes {
            ... on Post {
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

`;
