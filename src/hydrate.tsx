import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./app"

// This is the entry point for esbuild. This file compiles down to
// script.js. So this is the entry point for the React runtime and
// the app.
//
// prettier-ignore
ReactDOM.hydrate(
	<App location={window.location.pathname} />,
	document.getElementById("root")
)
