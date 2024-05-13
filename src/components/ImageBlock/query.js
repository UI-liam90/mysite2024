import { globalBlockSettingsFragment, imageFragment } from "~data/dataFragments";
export const imageBlockFields = /* GraphQL */ `
fieldGroupName
image {
    node {
        ${imageFragment}
    }
}
${globalBlockSettingsFragment}
`;
