import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "../style.css";
import Layout from "../components/Layout";
import { offsetLimitPagination } from "@apollo/client/utilities";

const client = new ApolloClient({
	uri: "https://torch-cms-database.herokuapp.com/graphql",
	cache: new InMemoryCache({
		typePolicies: {
			Post: {
				keyFields: ["title"],
			},
			Categories: {
				keyFields: ["IDN"],
			},
			Query: {
				fields: {
					posts: {
						keyArgs: ["$latestSort", "$var", "$trendSort", "$subLatestSort"],
					},
				},
			},
			PostEntityResponseCollection: {
				fields: {
					data: offsetLimitPagination(),
				},
			},
		},
	}),
});

export default function App({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}
