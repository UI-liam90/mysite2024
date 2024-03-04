import React from "react";

const ConditionalWrapper = ({ condition, classes, children }) => {
    if (condition) {
        return <div className={classes}>{children}</div>;
    }
    return children;
};

export default ConditionalWrapper;
