import "./style.scss";

const renderPreviousLink = ({ hasPreviousPage, currentPage, archivePath }) => {
    let previousLink = null;

    if (2 === currentPage) {
        previousLink = archivePath;
    } else if (2 < currentPage) {
        previousLink = `${archivePath}page/${currentPage - 1}`;
    }

    if (hasPreviousPage) {
        return (
            <a className={"prev page-numbers"} href={previousLink}>
                <span className="nav-prev-text">
                    Newer <span className="nav-short">Posts</span>
                </span>
            </a>
        );
    }
};

const renderNextLink = ({ hasNextPage, currentPage, archivePath }) => {
    if (hasNextPage) {
        return (
            <a className={"next page-numbers"} href={`${archivePath}page/${currentPage + 1}`}>
                <span className="nav-next-text">
                    Older <span className="nav-short">Posts</span>
                </span>
            </a>
        );
    }
};

const renderPagesInBetween = ({ currentPage, totalCount, archivePath, postSize }) => {
    const pageCount = Math.ceil(totalCount / postSize);
    const pageNumber = (page, isCurrent, isFirst) => {
        if (isCurrent) {
            return {
                tag: "span",
                children: page,
                className: "page-numbers page-numbers--current",
            };
        }

        const to = isFirst ? archivePath : `${archivePath}page/${page}`;

        return {
            tag: "a",
            children: page,
            href: to,
            className: "page-numbers",
        };
    };

    const dots = {
        tag: "span",
        children: "…",
        className: "page-numbers dots",
    };

    let elementsToRender = [];

    if (pageCount > 5) {
        // current is 1 - 3: show all on left side and dots for right
        if (currentPage < 4) {
            for (let i = 1; i <= currentPage + 1; i++) {
                elementsToRender.push(pageNumber(i, currentPage === i, i === 1));
            }
            elementsToRender.push(dots); // dots in between
            elementsToRender.push(pageNumber(pageCount, false, false)); // last page
        }
        // if on of the last 3
        else if (currentPage >= pageCount - 2) {
            elementsToRender.push(pageNumber(1, false, true)); // last page
            elementsToRender.push(dots);

            for (let i = currentPage - 1; i < pageCount + 1; i++) {
                elementsToRender.push(pageNumber(i, currentPage === i, i === 1));
            }
        } else {
            elementsToRender.push(pageNumber(1, false, true)); // last page
            elementsToRender.push(dots);

            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                elementsToRender.push(pageNumber(i, currentPage === i, i === 1));
            }

            elementsToRender.push(dots);
            elementsToRender.push(pageNumber(pageCount, false, false)); // last page
        }
    } else {
        for (let i = 1; i < pageCount + 1; i++) {
            elementsToRender.push(pageNumber(i, currentPage === i, i === 1));
        }
    }

    return elementsToRender.map(({ tag: Tag, children, ...props }, index) => (
        <Tag key={index} {...props}>
            {children}
        </Tag>
    ));
};

const ArchivePagination = ({ hasPreviousPage, hasNextPage, currentPage, totalCount, archivePath, postSize }) => {
    if (hasPreviousPage === false && hasNextPage === false) {
        return null;
    }
    return (
        <div className="pagination-wrapper section-inner">
            <hr className="styled-separator pagination-separator is-style-wide" aria-hidden="true" />

            <nav className="navigation pagination" role="navigation" aria-label="Posts">
                <h2 className="screen-reader-text">Posts navigation</h2>
                <div className="nav-links">
                    {renderPreviousLink({ hasPreviousPage, currentPage, archivePath })}
                    {renderPagesInBetween({ currentPage, totalCount, archivePath, postSize })}
                    {renderNextLink({ hasNextPage, currentPage, archivePath })}
                </div>
            </nav>
        </div>
    );
};

export default ArchivePagination;
