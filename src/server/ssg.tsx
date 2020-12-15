import App from "../client/app"
import Document from "../client/document"
import fs from "fs"
import handle from "../utils/handle"
import p from "fs/promises"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import routes from "../client/routes"
import { StaticRouter } from "react-router-dom"
import type { IRoutes } from "./types"

// Asynchronously generates HTML.
//
// TODO: Add support for `Promise.all`?
async function generateServerHTMLAsync(routes: IRoutes) {
	Object.keys(routes).forEach(async key => {
		let routeProps = undefined
		if (routes[key].getProps) {
			routeProps = routes[key].getProps!() // FIXME?
		}
		const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
			<StaticRouter location={key}>
				<Document route={<App {...routeProps} />} />
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
	const basename = path.basename(cssPath)

	// TODO: Check `copyFileSync` error? How?
	fs.copyFileSync("src/client/style.css", `public/${basename}`)
}

;(async () => {
	if (!fs.existsSync("public")) {
		fs.mkdirSync("public")
	}
	const [, err] = await handle(generateServerHTMLAsync(routes))
	if (err) {
		throw new Error("generateServerHTMLAsync: an unexpected error occurred: " + err)
	}
	// TODO: Add error checking?
	generateServerCSS("src/client/style.css")
})()
