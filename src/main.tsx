import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/reset.css";
import "./styles/variable.css";
import "./styles/typography.css";
import "./styles/animation.css";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<App />
		<Toaster
			position="top-right"
			toastOptions={{
				duration: 5000,
			}}
		/>
	</React.StrictMode>,
);
