import Document from "./document"
import fs from "fs"
import handle from "../utils/handle"
import p from "fs/promises"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import routes from "../routes"
import { StaticRouter } from "react-router-dom"
import type { IRoutes } from "./types"

// Asynchronously generates HTML.
//
// TODO: Add support for `Promise.all`?
async function generateServerHTMLAsync(routes: IRoutes) {
	const modRoutes: IRoutes = {
		...routes,
		"/404": null,
	}
	Object.keys(modRoutes).forEach(async key => {
		const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
			<StaticRouter location={key}>
				<Document route={modRoutes[key]} />
			</StaticRouter>,
		)}`
		return p.writeFile(`public/${key === "/" ? "index" : key}.html`, doc)
	})
}

// Generates CSS.
//
// TODO: Add support for stylesheets pattern?
function generateServerCSS(cssPath: string) {
	if (!fs.statSync(cssPath)) {
		// No-op
		return
	}
	// TODO: Error handling.
	const basename = path.basename(cssPath)
	fs.copyFileSync("src/style.css", `public/${basename}`)
}

;(async () => {
	if (!fs.existsSync("public")) {
		fs.mkdirSync("public")
	}
	const [, err] = await handle(generateServerHTMLAsync(routes))
	if (err) {
		throw new Error("generateServerHTMLAsync: an unexpected error occurred: " + err)
	}
	// TODO: Error handling.
	generateServerCSS("src/style.css")
})()
