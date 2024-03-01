export const imageFragment = `
altText
mediaItemUrl
mediaDetails {
  width
  height
}
mimeType
`;
export const menuFragment = `
id
label
title
path
parentId
cssClasses
target
`;
export const seoFragment = `
metaDesc
metaKeywords
title
metaRobotsNofollow
metaRobotsNoindex
canonical
schema {
    raw
}
opengraphDescription
opengraphTitle
opengraphAuthor
opengraphImage {
    mediaItemUrl
    mediaDetails {
        file
    }
}
opengraphSiteName
opengraphType
opengraphUrl
twitterDescription
twitterTitle
twitterImage {
    mediaItemUrl
    mediaDetails {
        file
    }
}
`;
