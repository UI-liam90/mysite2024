import { HTMLRender } from "~helpers/htmlRender";
import { v4 } from "uuid";
import CountUpEl from "./CountUpEl";

import "./style.scss";

const CountUpBlock = ({ blockData }) => {
    return (
        <div className="count-up-block">
            <div className="container">
                <HTMLRender data={blockData.text} />
                <div className="count-up-block__grid">
                    {blockData.items.map((item) => {
                        return <CountUpEl key={v4()} countData={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};
export default CountUpBlock;
