import { imageFragment } from "~data/dataFragments";
export const imageAndTextGridBlockFields = /* GraphQL */ `
fieldGroupName
gridPosition
text
images {
    ${imageFragment}
}
`;
