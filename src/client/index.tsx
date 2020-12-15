import App from "./app"
import React from "react"
import ReactDOM from "react-dom"
import routes from "./routes"
import { BrowserRouter } from "react-router-dom"

// This is the entry point for esbuild. This file compiles down to
// script.js. So this is the entry point for the React runtime and
// the app.
//
// TODO: Can this be provided by the framework? Therefore the developer
// only needs to concern themselves with:
//
// - App development
// - Routing
// - CSS
//
;(() => {
	// FIXME
	const appProps = routes[window.location.pathname].getProps!()
	ReactDOM.hydrate(
		<BrowserRouter>
			<App {...appProps} />
		</BrowserRouter>,
		document.getElementById("root"),
	)
})()
