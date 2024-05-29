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
			<svg fill="none" height="28" viewBox="0 0 32 32" width="28" xmlns="http://www.w3.org/2000/svg">
				<path
					d="m16 4c-6.62891 0-12 5.37109-12 12 0 6.6289 5.37109 12 12 12 6.6289 0 12-5.3711 12-12 0-.4844-.0352-.9609-.0938-1.4336-.3984.2734-.8828.4336-1.4062.4336-1.0781 0-1.9883-.6875-2.3398-1.6406-.625.3984-1.3633.6406-2.1602.6406-2.2109 0-4-1.7891-4-4 0-.73438.2109-1.41406.5586-2.00781-.0195.0039-.0391.00781-.0586.00781-1.3828 0-2.5-1.11719-2.5-2.5 0-.55859.1875-1.06641.4961-1.48047-.1641-.00781-.3281-.01953-.4961-.01953zm7.5 0c-.8281 0-1.5.67188-1.5 1.5s.6719 1.5 1.5 1.5 1.5-.67188 1.5-1.5-.6719-1.5-1.5-1.5zm-9.4492 2.1875c.1992 1.28906.9492 2.39844 1.9961 3.08594-.0313.23828-.0469.48437-.0469.72656 0 3.3086 2.6914 6 6 6 .4961 0 .9922-.0625 1.4688-.1875.6835.625 1.5468 1.0391 2.4843 1.1563-.4883 5.0624-4.7656 9.0312-9.9531 9.0312-5.5156 0-10-4.4844-10-10 0-4.8477 3.46875-8.90234 8.0508-9.8125zm7.9492 2.8125c-.5508 0-1 .44922-1 1 0 .5508.4492 1 1 1s1-.4492 1-1c0-.55078-.4492-1-1-1zm-8 1c-.5508 0-1 .4492-1 1s.4492 1 1 1 1-.4492 1-1-.4492-1-1-1zm13 0c-.5508 0-1 .4492-1 1s.4492 1 1 1 1-.4492 1-1-.4492-1-1-1zm-16 3c-1.10547 0-2 .8945-2 2s.89453 2 2 2c1.1055 0 2-.8945 2-2s-.8945-2-2-2zm5 2c-.5508 0-1 .4492-1 1s.4492 1 1 1 1-.4492 1-1-.4492-1-1-1zm-3.5 4c-.8281 0-1.5.6719-1.5 1.5s.6719 1.5 1.5 1.5 1.5-.6719 1.5-1.5-.6719-1.5-1.5-1.5zm7 1c-.8281 0-1.5.6719-1.5 1.5s.6719 1.5 1.5 1.5 1.5-.6719 1.5-1.5-.6719-1.5-1.5-1.5z"
					fill="#000"
				/>
			</svg>
		</button>
	);
};

export default CookieNotice;
