import "../style.css";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<SWRConfig value={options}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</SessionProvider>
	);
}

const options = {
	fetcher: (url) => fetch(url).then((r) => r.json()),
};
