import { conditionalLogicFragment } from "../../fragments";
export const addressFieldFragment = /* GraphQL */ `
  ... on AddressField {
    addressType
    addressValues {
      city
      country
      lineTwo
      state
      street
      zip
    }
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
    inputs {
        ... on AddressInputProperty {
            id
            name
            label
            isHidden
            defaultValue
            key
            placeholder
            customLabel
        }
    }
    inputName
    isRequired
    label
    labelPlacement
    value
    visibility
  }
`;
