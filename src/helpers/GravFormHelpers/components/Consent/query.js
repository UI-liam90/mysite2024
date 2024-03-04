import { conditionalLogicFragment } from "../../fragments";

export const consentFieldFragment = /* GraphQL */ `
  ... on ConsentField {
    adminLabel
    checkboxLabel
    conditionalLogic {
      ${conditionalLogicFragment}
    }
    consentValue
    cssClass
    description
    descriptionPlacement
    errorMessage
    isRequired
    label
    labelPlacement
    value
    visibility
  }
`;
