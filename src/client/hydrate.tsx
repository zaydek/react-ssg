import App from "./app"
import React from "react"
import ReactDOM from "react-dom"
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
ReactDOM.hydrate(
	// TODO: Move `<StaticRouter>` from app.tsx to __ssg.tsx.
	<BrowserRouter>
		<App /* location={window.location.pathname} */ />
	</BrowserRouter>,
	document.getElementById("root"),
)
