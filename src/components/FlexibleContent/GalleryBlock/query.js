import { imageFragment } from "~data/dataFragments";
export const galleryBlockFields = /* GraphQL */ `
fieldGroupName
text
displayGalleryAs
showLightbox
fullWidth
galleryItems {
    ${imageFragment}
    title
}
masonGalleryItems {
    gridDirection
    gridType
    gridItemsOne {
        ${imageFragment}
        title
    }
}
`;
