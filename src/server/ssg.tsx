import Document from "./document"
import fs from "fs"
import React from "react"
import ReactDOMServer from "react-dom/server"
import routes from "../routes"
import { execSync } from "child_process"
import { StaticRouter } from "react-router-dom"
import type { IStaticRoutes } from "./types"

function check(fn: Function) {
	try {
		const ret = fn()
		return [ret, null]
	} catch (err) {
		return [null, err]
	}
}

async function checkAsync<T>(promise: Promise<T>) {
	try {
		const ret = await promise
		return [ret, null]
	} catch (err) {
		return [null, err]
	}
}

// Asynchronously generates HTML.
async function prerenderHTMLAsync(routes: IStaticRoutes) {
	const modRoutes: typeof routes = {
		...routes,
		"/404": null,
	}
	const promises = []
	for (const key in modRoutes) {
		const promise = new Promise((_, reject) => {
			const doc = `<!DOCTYPE html>${ReactDOMServer.renderToString(
				<StaticRouter location={key}>
					<Document metadata={modRoutes[key]} />
				</StaticRouter>,
			)}`
			const [, err] = check(() => fs.writeFileSync(`dist/${key === "/" ? "index" : key}.html`, doc))
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

function copyPublicToDist() {
	if (!fs.existsSync("public")) {
		// No-op
		return null
	}
	const res = execSync(`cp -r public dist`).toString()
	if (res) {
		return new Error("an unexpected error occurred: " + res)
	}
	return null
}

;(async () => {
	if (!fs.existsSync("dist")) {
		fs.mkdirSync("dist")
	}
	const err1 = await prerenderHTMLAsync(routes)
	if (err1) {
		throw new Error("prerenderHTMLAsync: " + err1.toString())
	}
	const err2 = copyPublicToDist()
	if (err2) {
		throw new Error("copyPublicToDist: " + err2.toString())
	}
})()
