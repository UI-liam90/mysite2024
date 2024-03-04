// import { usePathname, useSearchParams } from "next/navigation";
// import { useEffect } from "react";
// import { pageview } from "./gtagHelper";

export default function GoogleAnalytics({ measurementId }) {
    // const pathname = usePathname();
    // const searchParams = useSearchParams();

    // useEffect(() => {
    //     const url = pathname + searchParams.toString();

    //     pageview(measurementId, url);
    // }, [pathname, searchParams, measurementId]);
    return (
        <>
            <script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
            <script
                id="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'denied'
                });

                gtag('config', '${measurementId}');
                `,
                }}
            />
        </>
    );
}
