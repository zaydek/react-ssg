import Document from "./document"
import fs from "fs"
import React from "react"
import ReactDOMServer from "react-dom/server"
import routes from "../routes"
import { check, checkAsync } from "./utils"
import { StaticRouter } from "react-router-dom"
import type { Routes } from "./types"

// Asynchronously generates HTML.
async function prerenderHTMLAsync(routes: Routes) {
	const modRoutes: typeof routes = {
		...routes,
		"/404": null,
	}
	const promises = []
	for (const key in modRoutes) {
		const promise = new Promise((_, reject) => {
			const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
				<StaticRouter location={key}>
					<Document metadata={modRoutes[key]?.metadata} />
				</StaticRouter>,
			)}`
			const [, err] = check(() => fs.writeFileSync(`build/${key === "/" ? "index" : key}.html`, doc))
			if (err) {
				reject(err)
			}
		})
		promises.push(promise)
	}
	const [, err] = await checkAsync(Promise.all(promises))
	if (err) {
		return err
	}
	return null
}

;(async () => {
	const err = await prerenderHTMLAsync(routes)
	if (err) {
		throw err
	}
})()
