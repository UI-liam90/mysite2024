import { imageFragment, globalBlockSettingsFragment } from "~data/dataFragments";
export const galleryBlockFields = /* GraphQL */ `
fieldGroupName
text
displayGalleryAs
showLightbox
fullWidth
galleryItems {
    nodes {
        ${imageFragment}
        title
    }
}
masonGalleryItems {
    gridDirection
    gridType
    gridItemsOne {
        nodes {
            ${imageFragment}
            title
        }

    }
}
${globalBlockSettingsFragment}
`;
