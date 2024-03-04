import React from "react";
import parse from "html-react-parser";
//import { Image } from "astro:assets";
const options = {
    // replace: (domNode) => {
    //     // Look for an img tag and replace it with Image.
    //     if (domNode.name && domNode.name === "img") {
    //         const { src, alt, width, height } = domNode.attribs;
    //         console.log("image comp", domNode.attribs);
    //         return <Image src="https://liamwebwright.co.uk/24hrrpg/wp-content/uploads/2024/01/1aa26c656c154988807b2b18673c1ffe.webp" width="256" height="256" alt="" />;
    //     }
    // },
};

export const HTMLRender = ({ data }) => {
    return <>{data && data !== null ? parse(data, options) : ""}</>;
};
