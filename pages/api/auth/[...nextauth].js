import NextAuth from "next-auth";
import lookup from "../../../serverless/utils/lookup";
import CredentialsProvider from "next-auth/providers/credentials";
import authorModel from "../../../serverless/models/author.model";

const authOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "your@mail.com" },
				password: {
					label: "Password",
					type: "password",
					placeholder: "password",
				},
			},
			async authorize(credentials, req) {
				const isAuth = await lookup(credentials);

				if (isAuth)
					return await authorModel.findOne({
						"credentials.email": credentials.email,
					});
				else {
					return null;
				}
			},
		}),
	],
};
export default NextAuth(authOptions);
