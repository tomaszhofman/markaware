import invariant from "tiny-invariant";
import { type TypedDocumentString } from "@/gql/graphql";

type GraphqlResponse<T> =
	| { data?: undefined; errors: { message: string[] } }
	| { data: T; errors?: undefined };

export async function executeGraphQL<TResult, TVariables>({
	query,
	variables,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables: TVariables;
}): Promise<TResult> {
	invariant(process.env.GRAPHQL_URL, "Missing GRAPHQL_URL env variable");

	const response = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const graphqlBody = (await response.json()) as GraphqlResponse<TResult>;

	if (graphqlBody.errors) {
		throw TypeError("Graphql Error", {
			cause: graphqlBody.errors,
		});
	}

	return graphqlBody.data;
}
