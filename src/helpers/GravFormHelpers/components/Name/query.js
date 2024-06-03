import { conditionalLogicFragment } from "~helpers/GravFormHelpers/fragments";

export const nameFieldFragment = /* GraphQL */ `
  ... on NameField {
    adminLabel
    canPrepopulate
    conditionalLogic {
      ${conditionalLogicFragment}
    }
    cssClass
    description
    descriptionPlacement
    errorMessage
    hasAutocomplete
    inputName
    isRequired
    label
    labelPlacement
    subLabelPlacement
    value
    visibility
    inputs {
            ... on NameInputProperty {
              id
              name
              choices {
                isSelected
                text
                value
              }
              customLabel
              placeholder
              label
              isHidden
              key
              defaultValue
            }
          }
  }
`;
