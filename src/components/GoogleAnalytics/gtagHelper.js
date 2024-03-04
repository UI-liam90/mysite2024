export const pageview = (gaMesurementId, url) => {
    window.gtag("config", gaMesurementId, {
        page_path: url,
    });
};
