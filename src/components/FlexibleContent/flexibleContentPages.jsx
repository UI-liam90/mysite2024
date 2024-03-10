import FlexibleContent from "./oldflex.jsx";

const FlexibleContentPages = ({ blockData }) => {
    const blocks = blockData;
    return <FlexibleContent blockData={blocks} contentType="Page" />;
};

export default FlexibleContentPages;
