import { useEffect, useState } from "react";
import { HTMLRender } from "./htmlRender";
const AstroSVG = ({ src }) => {
    const [svgCode, setSvgCode] = useState("<svg></svg>");
    useEffect(() => {
        fetch(src)
            .then((r) => r.text())
            .then((text) => {
                setSvgCode(text);
            })
            .catch(console.error.bind(console));
    }, []);

    return (
        <div className="inline-svg">
            <HTMLRender data={svgCode} />
        </div>
    );
};

export default AstroSVG;
