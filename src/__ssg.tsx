import * as fs from "fs"
import * as React from "react"
import * as ReactDOMServer from "react-dom/server"
import Document from "./document"
import routes from "./routes"
import { StaticRouter } from "react-router-dom"

function index(path: string) {
	return path === "/" ? "index" : path
}

// TODO: Should we just have a client and server folder?
;(() => {
	Object.keys(routes).forEach(key => {
		const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
			<StaticRouter location={key}>
				<Document route={routes[key]} />
			</StaticRouter>,
		)}`
		// TODO: Do we want to generate to public or somewhere else?
		fs.writeFile(`public/${index(key)}.html`, doc, err => {
			if (err) {
				throw new Error("ssg.tsx: an unexpected error occurred: " + err)
			}
		})
	})
})()
