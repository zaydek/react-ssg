import * as React from "react"
import * as ReactDOM from "react-dom"

import A from "./a"
import B from "./b"
import Index from "./index"

if (window.location.pathname === "/") {
	console.log("matched path /")
	ReactDOM.hydrate(<Index />, document.getElementById("root"))
} else if (window.location.pathname === "/a") {
	console.log("matched path /a")
	ReactDOM.hydrate(<A />, document.getElementById("root"))
} else if (window.location.pathname === "/b") {
	console.log("matched path /b")
	ReactDOM.hydrate(<B />, document.getElementById("root"))
} else {
	// TODO: 404
	throw new Error("app: no such route; cannot hydrate")
}
