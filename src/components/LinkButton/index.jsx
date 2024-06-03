//styles for this can be found in the styles/global/button file
import Link from "~helpers/Link";
const LinkButton = ({ url, type, size, target, children }) => {
	return (
		<Link href={url} className={`button ${type ? `button--${type}` : ""} ${size ? `button--${size}` : ""}`} target={target}>
			{children}
		</Link>
	);
};

export default LinkButton;
