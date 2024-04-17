import AstroSVG from "./AstroSVG";
export const WpImage = ({ file, loading = "lazy", inlineSVG = false }) => {
    if (file) {
        if (file?.mimeType === "image/svg+xml" && inlineSVG === true) {
            return <AstroSVG src={file?.mediaItemUrl} />;
        } else if (file?.mimeType === "image/svg+xml" && inlineSVG === false) {
            return <img src={file?.mediaItemUrl} alt="" height={file?.mediaDetails?.height} width={file.mediaDetails?.width} />;
        } else {
            const sizesRaw = file?.mediaDetails?.sizes;
            const sizesSorted = sizesRaw?.sort((a, b) => parseInt(a.width) - parseInt(b.width));
            return (
                <picture>
                    {sizesSorted?.map((size, idx) => {
                        return <source key={idx} media={`(max-width:${size.width}px)`} srcSet={size.sourceUrl} />;
                    })}
                    <img loading={loading} src={file?.mediaItemUrl} alt={file?.altText} height={file?.mediaDetails?.height} width={file.mediaDetails?.width} />
                </picture>
            );
        }
    }
};
