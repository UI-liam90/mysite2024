import { imageFragment } from "~data/dataFragments";
export const imageAndTextBlockFields = /* GraphQL */ `
fieldGroupName
gridPosition
text
image {
    ${imageFragment}
}
`;
