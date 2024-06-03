import { conditionalLogicFragment } from "~helpers/GravFormHelpers/fragments";

export const sectionFieldFragment = /* GraphQL */ `
  ... on SectionField {
        conditionalLogic {
        ${conditionalLogicFragment}
        }
        cssClass
        description
        label
        visibility
    }
`;
