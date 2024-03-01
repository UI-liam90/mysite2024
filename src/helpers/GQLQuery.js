export default async function GQLQuery({ query }) {
    const res = await fetch(import.meta.env.PUBLIC_WORDPRESS_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    const responseBody = await res.json();
    if (responseBody && responseBody.data) {
        return responseBody.data;
    } else {
        console.log(responseBody);
        throw new Error("Failed to fetch data");
    }
}
