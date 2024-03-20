//import { gql } from "@apollo/client";
import gql from "graphql-tag";

import { captchaFieldFragment } from "./components/Captcha/query";
import { dateFieldFragment, textFieldFragment, emailFieldFragment, hiddenFieldFragment, numberFieldFragment, phoneFieldFragment } from "./components/Input/query";
import { htmlFieldFragment } from "./components/Html/query";
import { multiSelectFieldFragment } from "./components/Multiselect/query";
import { selectFieldFragment } from "./components/Select/query";
import { radioFieldFragment, checkboxFieldFragment } from "./components/SelectorList/query";
import { textareaFieldFragment } from "./components/Textarea/query";
import { fileUploadFieldFragment } from "./components/FileUpload/query";
import { consentFieldFragment } from "./components/Consent/query";
import { formConfirmationFragment, submitButtonFragment } from "./fragments";
import { nameFieldFragment } from "./components/Name/query";
import { addressFieldFragment } from "./components/Address/query";

export const submitMutationQuery = gql`
	mutation submitForm($id: ID!, $fieldValues: [FormFieldValuesInput]!) {
		submitGfForm(input: { id: $id, fieldValues: $fieldValues }) {
			errors {
				id
				message
			}
		}
	}
`;

export const gravityFormQuery = /* GraphQL */ `
  query GetGravityForm($id: ID!) {
    gfForm(id: $id, idType: DATABASE_ID) {
      databaseId
      description
      descriptionPlacement
      labelPlacement
      subLabelPlacement
      title
      submitButton {
        ${submitButtonFragment}
      }
      confirmations {
        ${formConfirmationFragment}
      }
      formFields {
        nodes {
          displayOnly
          id
          inputType
          layoutGridColumnSpan
          layoutSpacerGridColumnSpan
          pageNumber
          type
          visibility
          ${captchaFieldFragment}
          ${checkboxFieldFragment}
          ${dateFieldFragment}
          ${emailFieldFragment}
          ${hiddenFieldFragment}
          ${htmlFieldFragment}
          ${multiSelectFieldFragment}
          ${numberFieldFragment}
          ${phoneFieldFragment}
          ${radioFieldFragment}
          ${selectFieldFragment}
          ${textareaFieldFragment}
          ${textFieldFragment}
          ${fileUploadFieldFragment}
          ${consentFieldFragment}
          ${nameFieldFragment}
          ${addressFieldFragment}
        }
      }
    }
    gfSettings {
      recaptcha {
        publicKey
        type
      }
    }
  }
`;
