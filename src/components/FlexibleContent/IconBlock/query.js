import { imageFragment } from "~data/dataFragments";
export const iconBlockFields = /* GraphQL */ `
    fieldGroupName
    text
    items {
        icon {
            ${imageFragment}
        }
        iconSvg {
            ${imageFragment}
        }
        textArea
    }
`;
