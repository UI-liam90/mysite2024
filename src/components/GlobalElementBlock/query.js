import { pageBuilderBlocks } from "~data/pageBuilder";
export const globalBuilderItems = `
fieldGroupName
elementToClone {
    nodes {
        ... on GlobalElement {
            pageBuilder {
                blocks {
                    ${pageBuilderBlocks}
                }
            }
        }
    }
}
`;
