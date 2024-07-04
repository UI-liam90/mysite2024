import GQLQuery from "~helpers/GQLQuery";
import { imageFragment, menuFragment } from "~data/dataFragments";

export async function getMenu() {
    const query = {
        query: `
          query {
            menuItems(where: {location: MAIN_NAV}, first: 1000) {
              nodes {
                ${menuFragment}
              }
            }
          }
      `,
    };
    const responseBody = await GQLQuery(query, {});

    return responseBody;
}
export async function getHeader() {
    const query = {
        query: `
        query {
          themeGeneralSettings {
            themeSettings {
              siteLogo {
                node {
                  ${imageFragment}
                }
              }
              siteLogoAlternate {
                node {
                  ${imageFragment}
                }
              }
              siteLogoSvg {
                node {
                  ${imageFragment}
                }
              }
              siteLogoAlternateSvg {
                node {
                  ${imageFragment}
                }
              }
            }
          }
        }
      `,
    };
    const responseBody = await GQLQuery(query, {});

    return responseBody;
}
export async function getFooter() {
    const query = {
        query: `
          query {
            menuItems(where: {location: FOOTER_MENU}) {
              nodes {
                ${menuFragment}
              }
            }
            generalSettings {
              title
            }
            themeGeneralSettings {
              themeSettings {
                socialMedia {
                  type
                  url
                }
              }
            }
            siteContactDetails {
              businessContactDetails {
                address
                telephoneNumbers {
                  number
                  prefix
                }
                emailAddresses {
                  email
                }
              }
            }
          }
      `,
    };
    const responseBody = await GQLQuery(query, {});

    return responseBody;
}
export async function getContactDetails() {
    const query = {
        query: `
      query GetContactDetails {
        siteContactDetails {
          businessContactDetails {
            address
            telephoneNumbers {
              number
              prefix
            }
            emailAddresses {
              email
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

export async function getSearchResults(searchTerm) {
    const query = {
        query: `
    query search {
      contentNodes(where: {search: "${searchTerm}"}) {
        nodes {
          ... on Page {
            id
            title
            uri
            excerpt
            contentTypeName
            featuredImage {
              node {
                ${imageFragment}
              }
            }
          }
          ... on Post {
            id
            title
            uri
            excerpt
            contentTypeName
            featuredImage {
              node {
                ${imageFragment}
              }
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
