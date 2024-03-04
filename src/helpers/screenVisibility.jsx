import { useEffect, useState } from "react";

const ScreenVisibility = ({ hiddenMQ, children }) => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const matchMedia = window.matchMedia(hiddenMQ);
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
    }, [hiddenMQ]);

    if (isVisible) return null;

    return children;
};

export default ScreenVisibility;
