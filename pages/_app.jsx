import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "../style.css";
import Layout from "../components/Layout";
const client = new ApolloClient({
	uri: "https://torch-cms-database.herokuapp.com/graphql",
	cache: new InMemoryCache(),
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
