import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/reset.css";
import "./styles/variable.css";
import "./styles/typography.css";
import "./styles/animation.css";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />

		<Toaster
			position="top-right"
			toastOptions={{
				duration: 6000,
			}}
		/>
	</React.StrictMode>,
);
