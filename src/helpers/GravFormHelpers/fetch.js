import { submitMutationQuery } from "./query";
import GQLQuery from "~helpers/GQLQuery";

/**
 * Wrapper for the fetchAPI function that gets GraphQL data from Wordpress.
 */
async function fetchAPI(query, { baseUrl, variables } = {}) {
    const res = await fetch(`${import.meta.env.PUBLIC_WORDPRESS_API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: query,
            variables: variables,
        }),
    });

    const json = await res.json();

    if (json.errors) {
        console.error(JSON.stringify(json.errors, null, 2));
        throw new Error("Failed to fetch API");
    }

    return json.data;
}

export async function submitGravityForm({ id, fieldValues }) {
    const data = await fetchAPI(
        `
    mutation submitForm($id: ID!, $fieldValues: [FormFieldValuesInput]!) {
        submitGfForm(input: { id: $id, fieldValues: $fieldValues }) {
            errors {
                id
                message
            }
        }
    }
`,
        {
            baseUrl: `${import.meta.env.PUBLIC_WORDPRESS_API_URL}`,
            variables: { id, fieldValues },
        }
    );

    return data?.submitGfForm;
}
