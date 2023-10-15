/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment Color on ProductColorVariant {\n  hex\n  name\n}": types.ColorFragmentDoc,
    "query ProductGetListItem($slug: String!) {\n  product(where: {slug: $slug}) {\n    id\n    fabric\n    description\n    color {\n      hex\n      name\n    }\n    name\n    price\n    ...RelatedProducts\n    variants {\n      ... on Variant {\n        id\n        size {\n          name\n          label\n        }\n        color {\n          ...Color\n        }\n        available\n        quantityAvailable\n      }\n    }\n  }\n}": types.ProductGetListItemDocument,
    "query ProductsSlug {\n  products {\n    slug\n  }\n}": types.ProductsSlugDocument,
    "fragment RelatedProducts on Product {\n  relatedProducts {\n    slug\n    color {\n      name\n      hex\n    }\n  }\n}": types.RelatedProductsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Color on ProductColorVariant {\n  hex\n  name\n}"): typeof import('./graphql').ColorFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetListItem($slug: String!) {\n  product(where: {slug: $slug}) {\n    id\n    fabric\n    description\n    color {\n      hex\n      name\n    }\n    name\n    price\n    ...RelatedProducts\n    variants {\n      ... on Variant {\n        id\n        size {\n          name\n          label\n        }\n        color {\n          ...Color\n        }\n        available\n        quantityAvailable\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetListItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSlug {\n  products {\n    slug\n  }\n}"): typeof import('./graphql').ProductsSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RelatedProducts on Product {\n  relatedProducts {\n    slug\n    color {\n      name\n      hex\n    }\n  }\n}"): typeof import('./graphql').RelatedProductsFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
