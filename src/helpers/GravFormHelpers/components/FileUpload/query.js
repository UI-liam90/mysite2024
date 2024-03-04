import { conditionalLogicFragment } from "../../fragments";

export const fileUploadFieldFragment = /* GraphQL */ `
  ... on FileUploadField {
    adminLabel
    canAcceptMultipleFiles
    conditionalLogic {
      ${conditionalLogicFragment}
    }
    cssClass
    description
    descriptionPlacement
    errorMessage
    fileUploadValues {
        basePath
        baseUrl
        filename
        url
    }
    isRequired
    label
    labelPlacement
    maxFiles
    maxFileSize
    value
  }
`;
