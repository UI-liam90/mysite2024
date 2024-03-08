import { imageFragment } from "~data/dataFragments";
import GQLQuery from "~helpers/GQLQuery";

export async function getContactDetails() {
    const query = {
        query: `
        query GetContactDetails {
            acfOptionsContactDetails {
                contactDetails {
                    address
                    emailAddresses {
                        email
                    }
                    telephoneNumbers {
                        number
                        prefix
                    }
                }
            }
        }
    `,
    };
    const responseBody = await GQLQuery(query);

    return responseBody;
}
export async function getAllNews() {
    const query = {
        query: `
        query GetAllNews {
            posts {
                nodes {
                     title
                     uri
                     featuredImage {
                         node {
                             ${imageFragment}
                         }
                     }
                }
             }
        }
    `,
    };
    const responseBody = await GQLQuery(query);

    return responseBody;
}
