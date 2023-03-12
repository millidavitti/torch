import "../style.css";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
	console.log("_app: ", pageProps);
	return (
		<SWRConfig value={options}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	);
}

const options = {
	fetcher: (url) => fetch(url).then((r) => r.json()),
};
