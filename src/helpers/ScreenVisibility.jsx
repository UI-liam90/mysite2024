import { useEffect, useState } from "react";

const ScreenVisibility = ({ mediaQuery, hideOnMediaQuery = true, children }) => {
    // console.log("hideOnMediaQuery", hideOnMediaQuery);
    // console.log("isVisible", isVisible);

    if (hideOnMediaQuery) {
        const [isVisible, setIsVisible] = useState(true);
        useEffect(() => {
            const matchMedia = window.matchMedia(mediaQuery);
            const updateWindowDimensions = () => {
                if (matchMedia.matches) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            };
            updateWindowDimensions();
            window.addEventListener("resize", updateWindowDimensions);

            return () => {
                window.removeEventListener("resize", updateWindowDimensions);
            };
        }, [mediaQuery]);
        if (isVisible) return null;
    }

    if (!hideOnMediaQuery) {
        const [isVisible, setIsVisible] = useState(false);
        useEffect(() => {
            const matchMedia = window.matchMedia(mediaQuery);
            const updateWindowDimensions = () => {
                if (matchMedia.matches) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            };
            updateWindowDimensions();
            window.addEventListener("resize", updateWindowDimensions);

            return () => {
                window.removeEventListener("resize", updateWindowDimensions);
            };
        }, [mediaQuery]);
        if (!isVisible) return null;
    }

    return children;
};

export default ScreenVisibility;
