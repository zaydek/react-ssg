import * as fs from "fs"
import * as React from "react"
import * as ReactDOMServer from "react-dom/server"
import routes from "./routes"

function Document({ route: Route }: { route: React.ReactElement }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Document</title>
				<link rel="stylesheet" href="https://unpkg.com/@zaydek/duomo@0.7.0-rc.31/dist/index.min.css" />
				<link rel="stylesheet" href="style.css" />
			</head>
			<body>
				<div id="root">{ReactDOMServer.renderToString(Route)}</div>
				<script src="script.js"></script>
			</body>
		</html>
	)
}

;(() => {
	Object.keys(routes).forEach(key => {
		const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(<Document route={routes[key]} />)}`
		fs.writeFile(`public/${key}.html`, doc, err => {
			if (err) {
				throw new Error("ssr: an unexpected error occurred: " + err)
			}
		})
	})
})()

// for (const route of routes) {
// 	const doc = `
// 		<!DOCTYPE html>
// 		${ReactDOMServer.renderToString(<Document />)}
// 	`.trim()
// 	fs.writeFile("public/index.html", doc, err => {
// 		if (err) return console.log(err)
// 	})
// }

// ;(function main() {
// 	const doc = `
// 		<!DOCTYPE html>
// 		${ReactDOMServer.renderToString(<Document />)}
// 	`.trim()
// 	fs.writeFile("public/index.html", doc, err => {
// 		if (err) return console.log(err)
// 	})
// })()
