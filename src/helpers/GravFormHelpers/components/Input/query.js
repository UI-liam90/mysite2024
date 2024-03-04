import { conditionalLogicFragment } from "../../fragments";

export const textFieldFragment = /* GraphQL */ `
  ... on TextField {
    adminLabel
    autocompleteAttribute
    canPrepopulate
    conditionalLogic {
      ${conditionalLogicFragment}
    }
    cssClass
    defaultValue
    description
    descriptionPlacement
    errorMessage
    hasAutocomplete
    inputName
    isPasswordInput
    isRequired
    label
    labelPlacement
    maxLength
    placeholder
    shouldAllowDuplicates
    size
    value
    visibility
  }
`;

export const dateFieldFragment = /* GraphQL */ `
  ... on DateField {
    adminLabel
    calendarIconType
    calendarIconUrl
    canPrepopulate
    conditionalLogic {
      ${conditionalLogicFragment}
    }
    cssClass
    dateFormat
    dateType
    defaultValue
    description
    descriptionPlacement
    errorMessage
    inputName
    inputs {
      ... on DateInputProperty {
        id
        autocompleteAttribute
        customLabel
        defaultValue
        label
        placeholder
      }
    }
    isRequired
    label
    labelPlacement
    placeholder
    shouldAllowDuplicates
    subLabelPlacement
    value
    visibility
  }
`;

export const emailFieldFragment = /* GraphQL */ `
  ... on EmailField {
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
    hasEmailConfirmation
    inputs {
      ... on EmailInputProperty {
        id
        name
        autocompleteAttribute
        customLabel
        defaultValue
        label
        placeholder
      }
    }
    isRequired
    label
    labelPlacement
    placeholder
    shouldAllowDuplicates
    size
    subLabelPlacement
    value
    visibility
  }
`;

export const hiddenFieldFragment = /* GraphQL */ `
  ... on HiddenField {
    canPrepopulate
    defaultValue
    inputName
    label
    value
    visibility
  }
`;

export const numberFieldFragment = /* GraphQL */ `
  ... on NumberField {
    adminLabel
    autocompleteAttribute
    calculationFormula
    calculationRounding
    canPrepopulate
    conditionalLogic {
      ${conditionalLogicFragment}
    }
    cssClass
    defaultValue
    description
    descriptionPlacement
    errorMessage
    hasAutocomplete
    inputName
    isCalculation
    isRequired
    label
    labelPlacement
    numberFormat
    placeholder
    rangeMax
    rangeMin
    shouldAllowDuplicates
    size
    value
    visibility
  }
`;

export const phoneFieldFragment = /* GraphQL */ `
  ... on PhoneField {
    adminLabel
    autocompleteAttribute
    canPrepopulate
    conditionalLogic {
      ${conditionalLogicFragment}
    }
    cssClass
    defaultValue
    description
    descriptionPlacement
    errorMessage
    hasAutocomplete
    inputName
    isRequired
    label
    labelPlacement
    phoneFormat
    placeholder
    shouldAllowDuplicates
    size
    value
    visibility
  }
`;
