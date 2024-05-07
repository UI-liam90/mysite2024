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
                ${imageFragment}
              }
              siteLogoAlternate {
                ${imageFragment}
              }
              siteLogoSvg {
                ${imageFragment}
              }
              siteLogoAlternateSvg {
                ${imageFragment}
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
    const responseBody = await GQLQuery(query, {});

    return responseBody;
}
