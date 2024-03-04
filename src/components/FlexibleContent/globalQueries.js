import { imageFragment } from "~data/dataFragments";
import GQLQuery from "~helpers/GQLQuery";
export const globalFields = /* GraphQL */ `
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
`;
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
