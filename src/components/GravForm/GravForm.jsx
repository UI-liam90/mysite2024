import { useEffect, useState } from "react";

import { getGravityForm } from "~helpers/GravFormHelpers/server";
import GravityFormForm from "~helpers/GravFormHelpers";

import { ApolloClient, InMemoryCache } from "@apollo/client/core/core.cjs";
import { ApolloProvider } from "@apollo/client/react";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
const client = new ApolloClient({
    link: createUploadLink({
        uri: `${import.meta.env.PUBLIC_WORDPRESS_API_URL}`,
    }),
    cache: new InMemoryCache(),
});

const GravForm = ({ id, presetValues }) => {
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleFormData = async () => {
            setLoading(true);
            const data = await getGravityForm(id);
            // console.log(data);
            setSuccess(data);
            setLoading(false);
        };
        // console.log("effect");
        handleFormData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, presetValues]);

    if (loading) {
        return <p>Form Loading...</p>;
    }
    return (
        <ApolloProvider client={client}>
            <GravityFormForm data={success} presetValues={presetValues} />
        </ApolloProvider>
    );
};
export default GravForm;
