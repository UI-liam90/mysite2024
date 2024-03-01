import GQLQuery from "~helpers/GQLQuery";

export async function getSeo() {
    const query = {
        query: `
        query GetSeo {
            generalSettings {
                title
                description
            }
        }
    `,
    };
    const responseBody = await GQLQuery(query);

    return responseBody;
}