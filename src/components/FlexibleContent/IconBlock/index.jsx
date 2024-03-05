import { HTMLRender } from "~helpers/htmlRender";
import { v4 } from "uuid";
import IconEl from "./IconEl";

import "./style.scss";

const IconBlock = ({ blockData }) => {
    return (
        <div className="icon-block">
            <div className="container">
                <HTMLRender data={blockData.text} />
                <div className="icon-block__grid">
                    {blockData.items.map((item) => {
                        return <IconEl key={v4()} iconData={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};
export default IconBlock;
