import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./app"

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
// prettier-ignore
ReactDOM.hydrate(
	<App location={window.location.pathname} />,
	document.getElementById("root")
)
