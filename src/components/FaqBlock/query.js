import { globalBlockSettingsFragment } from "~data/dataFragments";
export const faqBlockFields = /* GraphQL */ `
fieldGroupName
text
faqs {
    question
    answer
}
${globalBlockSettingsFragment}
`;
