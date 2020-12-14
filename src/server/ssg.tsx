import Document from "../client/document"
import handle from "./handle"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import routes from "../client/routes"
import { promises as fs } from "fs"
import { StaticRouter } from "react-router-dom"
import type { IRoutes } from "./types"

// Asynchronously generates HTML.
//
// TODO: Add support for `Promise.all`?
async function generateServerHTMLAsync(routes: IRoutes) {
	Object.keys(routes).forEach(async key => {
		const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
			<StaticRouter location={key}>
				<Document route={routes[key]} />
			</StaticRouter>,
		)}`
		// TODO: Do we want to generate to public or somewhere else?
		const [, writeErr] = await handle(fs.writeFile(`public/${key === "/" ? "index" : key}.html`, doc))
		if (writeErr) {
			throw new Error("generateServerHTMLAsync: an unexpected error occurred: " + writeErr)
		}
	})
}

// Asynchronously generates CSS.
async function generateServerCSSAsync(cssPath: string) {
	const [, statErr] = await handle(fs.stat(cssPath))
	if (statErr) {
		// No-op
		return
	}
	const basename = path.basename(cssPath)
	const [, copyErr] = await handle(fs.copyFile("src/client/style.css", `public/${basename}`))
	if (copyErr) {
		throw new Error("generateServerCSSAsync: an unexpected error occurred: " + copyErr)
	}
}

;(async () => {
	await generateServerHTMLAsync(routes)
	await generateServerCSSAsync("src/client/style.css")
})()
