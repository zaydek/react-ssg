import App from "../app"
import React from "react"
import type { IRoute } from "./types"

export default function Document({ route }: { route: IRoute }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<link rel="icon" href="favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Web site created using create-react-app" />
				<title>{route && route.title}</title>
				<link rel="stylesheet" href="/style.css" />
			</head>
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root">
					<App />
				</div>
				<script src="/script.js"></script>
			</body>
		</html>
	)
}
