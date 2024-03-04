//styles for this can be found in the styles/global/button file

const LinkButton = ({ url, type, size, target, children }) => {
    return (
        <a href={url} className={`button ${type ? `button--${type}` : ""} ${size ? `button--${size}` : ""}`} target={target}>
            {children}
        </a>
    );
};

export default LinkButton;
