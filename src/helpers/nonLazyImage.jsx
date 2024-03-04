import React from "react";

export const NonLazyImage = ({ file, alt }) => {
    const image = file.localFile.childImageSharp.gatsbyImageData.images;
    return (
        <picture>
            {image.sources[0] && <source type={image.sources[0].type} srcSet={image.sources[0].srcSet} sizes={image.sources[0].sizes} />}

            <img src={image.fallback.src} srcSet={image.fallback.srcSet} sizes={image.fallback.sizes} alt={alt} />
        </picture>
    );
};
