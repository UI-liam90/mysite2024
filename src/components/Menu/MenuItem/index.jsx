import Link from "~helpers/Link";
const MenuItem = ({ item }) => {
    const internal = /^\/(?!\/)/.test(item.path);
    if (internal) {
        return (
            <>
                {item.path.includes("#") ? (
                    <a className={`anchor-link ${item.cssClasses}`} href={item.path} target={item.target}>
                        {item.label}
                    </a>
                ) : (
                    <Link class={`internal-link ${item.cssClasses}`} href={item.path}>
                        {item.label}
                    </Link>
                )}
            </>
        );
    }

    return (
        <a className={`external-link ${item.cssClasses}`} href={item.path}>
            {item.label}
        </a>
    );
};

export default MenuItem;
