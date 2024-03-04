import { ReactSVG } from "react-svg";
export const WpImage = ({ file }) => {
    if (file.mimeType === "image/svg+xml") {
        return <ReactSVG src={file.mediaItemUrl} />;
    } else {
        return <img loading="lazy" src={file.mediaItemUrl} alt={file.altText} height={file.mediaDetails.height} width={file.mediaDetails.width} />;
    }
};
