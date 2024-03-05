import React from "react";
import ArchivePagination from "../ArchivePagination";
import NewsGridItemBlock from "../NewsGridItemBlock";
import "./style.scss";

const PostList = ({ postsData, page, path, postSize }) => {
    return (
        <>
            <div className="news-grid">
                {postsData.nodes.map((post) => {
                    return <NewsGridItemBlock postData={post} headingType={"h2"} key={post.uri} />;
                })}
            </div>

            <ArchivePagination
                hasPreviousPage={postsData.pageInfo.offsetPagination.hasPrevious}
                hasNextPage={postsData.pageInfo.offsetPagination.hasMore}
                currentPage={page}
                totalCount={postsData.pageInfo.offsetPagination.total}
                archivePath={path}
                postSize={postSize}
            />
        </>
    );
};

export default PostList;
