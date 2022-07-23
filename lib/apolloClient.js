import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export default new ApolloClient({
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
