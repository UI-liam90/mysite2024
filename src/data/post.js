import GQLQuery from "~helpers/GQLQuery";
import { imageFragment, seoFragment } from "./dataFragments";
export async function getPostList(offset = 0, pageSize = 12, taxonomy = null, excludedId = null) {
    let condition = `where: {offsetPagination: {offset: ${offset}, size: ${pageSize}}, notIn: "${excludedId}", orderby: {field: DATE, order: DESC}}`;

    if (taxonomy) {
        condition = `where: {offsetPagination: {offset: ${offset}, size: ${pageSize}}, notIn: "${excludedId}", orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
    }

    const query = {
        query: `query getAllPosts {
              posts(${condition}) {
                pageInfo {
                  offsetPagination {
                    total
                    hasMore
                    hasPrevious
                  }
                }
                nodes {
                  excerpt
                  uri
                  date
                  title
                  featuredImage {
                    node {
                        ${imageFragment}
                    }
                }
                }
              }
            }`,
    };

    const responseBody = await GQLQuery(query, {});
    return responseBody.posts;
}

export async function getPostArchiveSeo() {
    const query = {
        query: `query GetPostArchiveSeo {
          acfOptionsArchivePageSettings {
            newsArchiveSettings {
              title: seoTitle
              pageTitle: title
              metaDesc: metaDescription
              featuredImage {
                ${imageFragment}
              }
            }
          }
        }
        `,
    };

    const responseBody = await GQLQuery(query, {});
    return responseBody;
}

export async function getPost(slug) {
    const query = {
        query: `query GetPostByUri {
          post(id: "${slug}", idType: SLUG) {
            title
            content
            seo {
              ${seoFragment}
            }
          }
        }
        `,
        variables: {
            slug: slug,
        },
    };

    const responseBody = await GQLQuery(query, {});
    return responseBody.post;
}

export async function getPostSlugs() {
    const query = {
        query: `query getPostSlugs {
          posts(first: 10000) {
            nodes {
              slug
            }
          }
        }`,
    };
    const responseBody = await GQLQuery(query);

    return responseBody.posts;
}
