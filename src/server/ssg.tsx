import * as React from "react"
import * as ReactDOMServer from "react-dom/server"
import Document from "../client/document"
import routes from "../client/routes"
import { promises as fs } from "fs"
import { StaticRouter } from "react-router-dom"
import type { IRoutes } from "./types"

function index(path: string) {
	return path === "/" ? "index" : path
}

// Asynchronously generates HTML.
async function asyncGenerateServerHTML(routes: IRoutes) {
	// TODO: Add support for `Promise.all`?
	Object.keys(routes).forEach(async key => {
		const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
			<StaticRouter location={key}>
				<Document route={routes[key]} />
			</StaticRouter>,
		)}`
		// TODO: Do we want to generate to public or somewhere else?
		try {
			await fs.writeFile(`public/${index(key)}.html`, doc)
		} catch (error) {
			throw new Error("asyncGenerateServerHTML: an unexpected error occurred: " + error)
		}
	})
}

// Asynchronously generates CSS.
async function asyncGenerateServerCSS() {
	// TODO: Add stat check.
	try {
		await fs.copyFile("src/client/style.css", "public/style.css")
	} catch (error) {
		throw new Error("asyncGenerateServerCSS: an unexpected error occurred: " + error)
	}
}

;(async () => {
	// TODO: We probably want to pass a file name to `asyncGenerateServerCSS`.
	await asyncGenerateServerHTML(routes)
	await asyncGenerateServerCSS(/* TODO */)
})()
