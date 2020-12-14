import * as fs from "fs"
import * as React from "react"
import * as ReactDOMServer from "react-dom/server"
import routes from "./routes"
import { StaticRouter } from "react-router-dom"

// TODO: Extract to a compositional API.
// TODO: We probably need some high-level components like:
//
// - <Head>
// - <Title> or <DocumentTitle>
//
function Document({ route }: { route: React.ReactElement }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				{/* TODO: If we build to build then it make sense to nest public for
				static assets. Alternatively we can build to public and nest static
				for static assets. Either way, favicon.icon is a little confusing
				because it doesn’t make clear where static assets go. */}
				<link rel="icon" href="favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Web site created using create-react-app" />
				<title>SSG React App</title>
				{/* TODO: This assumes style.css never changes and or doesn’t support
				other CSS files. If we use a compositional API this is basically a
				solved problem. */}
				<link rel="stylesheet" href="style.css" />
			</head>
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root">{route}</div>
				{/* TODO: This assumes script.js never changes and or doesn’t support
				other JS files. If we use a compositional API this is basically a
				solved problem. */}
				<script src="script.js"></script>
			</body>
		</html>
	)
}

function index(path: string) {
	return path === "/" ? "index" : path
}

;(() => {
	Object.keys(routes).forEach(key => {
		const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
			<StaticRouter location={key}>
				<Document route={routes[key]} />
			</StaticRouter>,
		)}`
		fs.writeFile(`public/${index(key)}.html`, doc, err => {
			if (err) {
				throw new Error("ssr: an unexpected error occurred: " + err)
			}
		})
	})
})()
