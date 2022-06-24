import React, { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "App";
import "style.css";

ReactDOM.render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>,
	document.getElementById("root"),
);
