import FlexibleContent from ".";

const FlexibleContentPages = ({ blockData }) => {
    const blocks = blockData;
    return <FlexibleContent blockData={blocks} contentType="Page" />;
};

export default FlexibleContentPages;
