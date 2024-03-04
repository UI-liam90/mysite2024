import { imageFragment } from "~data/dataFragments";
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
    ${imageFragment}
}
video {
    mediaItemUrl
}
slides {
    overlay
    button {
        url
        title
        target
    }
    slideImage {
        ${imageFragment}
    }
}
`;
