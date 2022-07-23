import React from "react";
import { ApolloProvider } from "@apollo/client";
import "../style.css";
import Layout from "../components/Layout";
import apolloClient from "../lib/apolloClient";

export default function App({ Component, pageProps }) {
	return (
		<ApolloProvider client={apolloClient}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}
