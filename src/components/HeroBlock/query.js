import { imageFragment, globalBlockSettingsFragment } from "~data/dataFragments";
export const heroBlockFields = /* GraphQL */ `
autoplay
fullWidth
speed
gap
showControls
heroType
fieldGroupName
muted
loop
overlay
button {
    url
    title
    target
}
image {
    node {
        ${imageFragment}
    }

}
video {
    node {
        mediaItemUrl
    }

}
slides {
    overlay
    button {
        url
        title
        target
    }
    slideImage {
        node {
            ${imageFragment}
        }
    }
}
${globalBlockSettingsFragment}
`;
