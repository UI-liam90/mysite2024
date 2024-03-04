"use client";
import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

import "./style.scss";

const config = {
    // root: 'body',
    // autoShow: true,
    disablePageInteraction: true,
    // hideFromBots: true,
    // mode: 'opt-in',
    // revision: 0,

    cookie: {
        name: "cc_cookie",
        // domain: location.hostname,
        // path: '/',
        // sameSite: "Lax",
        // expiresAfterDays: 365,
    },

    // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
    guiOptions: {
        consentModal: {
            layout: "box wide",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false,
        },
        preferencesModal: {
            layout: "box",
            equalWeightButtons: true,
            flipButtons: false,
        },
    },

    // onFirstConsent: ({ cookie }) => {
    //     console.log("onFirstConsent fired", cookie);
    // },

    // onConsent: ({ cookie }) => {
    //     console.log("onConsent fired!", cookie);
    // },

    // onChange: ({ changedCategories, changedServices }) => {
    //     console.log("onChange fired!", changedCategories, changedServices);
    // },

    // onModalReady: ({ modalName }) => {
    //     console.log("ready:", modalName);
    // },

    // onModalShow: ({ modalName }) => {
    //     console.log("visible:", modalName);
    // },

    // onModalHide: ({ modalName }) => {
    //     console.log("hidden:", modalName);
    // },

    categories: {
        necessary: {
            enabled: true, // this category is enabled by default
            readOnly: true, // this category cannot be disabled
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/, // regex: match all cookies starting with '_ga'
                    },
                    {
                        name: "_gid", // string: exact cookie name
                    },
                ],
            },

            // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
            services: {
                ga: {
                    label: "Google Analytics",
                    onAccept: () => {
                        if (import.meta.env.PUBLIC_ANALYTICS_ID) {
                            window.gtag("consent", "update", {
                                analytics_storage: "granted",
                            });
                        }
                    },
                    onReject: () => {
                        if (import.meta.env.PUBLIC_ANALYTICS_ID) {
                            window.gtag("consent", "update", {
                                analytics_storage: "denied",
                            });
                        }
                    },
                },
                // youtube: {
                //     label: 'Youtube Embed',
                //     onAccept: () => {},
                //     onReject: () => {}
                // },
            },
        },
        // ads: {},
    },

    language: {
        default: "en",
        translations: {
            en: {
                consentModal: {
                    title: "Cookies Consent",
                    description:
                        "This website employs cookies to improve user experience. If you continue on this website you will be providing your consent to our use of all cookies. Click the link to find out more about the cookies. Please note, if you do turn non-essential cookies off, this will limit the service that we are able to provide to you and may affect your user experience.",
                    acceptAllBtn: "Accept all Cookies",
                    acceptNecessaryBtn: "Essential Only",
                    showPreferencesBtn: "Manage Individual preferences",
                    // closeIconLabel: 'Reject all and close modal',
                    //     footer: `
                    //     <a href="#path-to-impressum.html" target="_blank">Impressum</a>
                    //     <a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
                    // `,
                },
                preferencesModal: {
                    title: "Manage cookie preferences",
                    acceptAllBtn: "Accept all Cookies",
                    acceptNecessaryBtn: "Accept Essential Only",
                    savePreferencesBtn: "Accept current selection",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Your Privacy Choices",
                            description: `This website employs cookies to improve user experience. If you continue on this website you will be providing your consent to our use of all cookies. Please note, if you do turn non-essential cookies off, this will limit the service that we are able to provide to you and may affect your user experience.`,
                        },
                        {
                            title: "Strictly Necessary",
                            description: "These cookies are essential for the proper functioning of the website and cannot be disabled.",

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: "necessary",
                        },
                        {
                            title: "Performance and Analytics",
                            description: "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                            linkedCategory: "analytics",
                            // cookieTable: {
                            //     caption: "Cookie table",
                            //     headers: {
                            //         name: "Cookie",
                            //         domain: "Domain",
                            //         desc: "Description",
                            //     },
                            //     body: [
                            //         {
                            //             name: "_ga",
                            //             domain: location.hostname,
                            //             desc: "Description 1",
                            //         },
                            //         {
                            //             name: "_gid",
                            //             domain: location.hostname,
                            //             desc: "Description 2",
                            //         },
                            //     ],
                            // },
                        },
                        // {
                        //     title: "Targeting and Advertising",
                        //     description:
                        //         "These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
                        //     linkedCategory: "ads",
                        // },
                        {
                            title: "More information",
                            description: 'For any queries in relation to our policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
                        },
                    ],
                },
            },
        },
    },
};
// const ResetCookieConsent = () => {
//     CookieConsent.reset(true);
//     CookieConsent.run(config);
// };
const CookieNotice = () => {
    useEffect(() => {
        CookieConsent.run(config);
    }, []);
    return (
        <button className="cookie-consent-edit" type="button" onClick={CookieConsent.showPreferences}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M247.2 17c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9l-14.6-82.8c-3.9-22.1-14.6-42.3-30.7-57.9L388.9 57.5c-16.1-15.6-36.6-25.6-58.7-28.7L247.2 17zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
        </button>
    );
};

export default CookieNotice;
