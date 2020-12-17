import Document from "./document"
import fs from "fs"
import handle from "../utils/handle"
import p from "fs/promises"
import React from "react"
import ReactDOMServer from "react-dom/server"
import routes from "../routes"
import { execSync } from "child_process"
import { StaticRouter } from "react-router-dom"
import type { IRoutes } from "./types"

// Asynchronously generates HTML.
//
// TODO: Add support for `Promise.all`?
async function generateServerHTMLAsync(routes: IRoutes) {
	const modRoutes: typeof routes = {
		...routes,
		"/404": null,
	}
	Object.keys(modRoutes).forEach(async key => {
		const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
			<StaticRouter location={key}>
				<Document metadata={modRoutes[key]} />
			</StaticRouter>,
		)}`
		return p.writeFile(`dist/${key === "/" ? "index" : key}.html`, doc)
	})
}

function copyPublicToDist() {
	const res = execSync(`cp -r public dist`).toString()
	if (res) {
		throw new Error("copyPublicToDist: an unexpected error occurred: " + res)
	}
}

;(async () => {
	if (!fs.existsSync("dist")) {
		fs.mkdirSync("dist")
	}
	const [, err] = await handle(generateServerHTMLAsync(routes))
	if (err) {
		throw new Error("generateServerHTMLAsync: an unexpected error occurred: " + err)
	}
	copyPublicToDist()
})()
