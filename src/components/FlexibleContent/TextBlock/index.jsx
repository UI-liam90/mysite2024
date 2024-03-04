import { HTMLRender } from "~helpers/htmlRender";

const TextBlock = ({ blockData }) => {
    return (
        <>
            <div className="text-block">
                <div className="container">
                    <HTMLRender data={blockData.wysiwyg} />
                </div>
            </div>
        </>
    );
};

export default TextBlock;
