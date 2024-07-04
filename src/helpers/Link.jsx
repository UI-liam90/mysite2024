const Link = ({ className, href, target, children }) => {
    const isValidUrl = (urlString) => {
        var urlPattern = new RegExp(
            "^(https?:\\/\\/)?" + // validate protocol
                "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
                "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
                "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
                "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
                "(\\#[-a-z\\d_]*)?$",
            "i"
        ); // validate fragment locator
        return !!urlPattern.test(urlString);
    };

    const url = isValidUrl(href) ? new URL(`${href}`) : null;
    const wordpressUrl = new URL(`${import.meta.env.PUBLIC_WORDPRESS_API_URL}`);

    if (url && url.host === wordpressUrl.host && !url?.pathname?.includes("/wp-content/uploads/")) {
        href = `${url.pathname}${url.search}${url.hash}`;
    }

    return (
        <a className={className} href={href} target={target} data-astro-prefetch>
            {children}
        </a>
    );
};
export default Link;
