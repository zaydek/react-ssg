import * as fs from "fs"
import * as React from "react"
import * as ReactDOMServer from "react-dom/server"
import routes from "./routes"

// TODO: Extract to a compositional API.
function Document({ route }: { route: React.ReactElement }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Document</title>
				<link rel="stylesheet" href="style.css" />
			</head>
			<body>
				<div id="root">{route}</div>
				<script src="script.js"></script>
			</body>
		</html>
	)
}

// Replaces `"/"` with `"index"`.
function index(path: string) {
	return path === "/" ? "index" : path
}

;(() => {
	Object.keys(routes).forEach(key => {
		const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(<Document route={routes[key]} />)}`
		fs.writeFile(`public/${index(key)}.html`, doc, err => {
			if (err) {
				throw new Error("ssr: an unexpected error occurred: " + err)
			}
		})
	})
})()
