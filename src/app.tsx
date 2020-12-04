import * as React from "react"
import * as ReactDOM from "react-dom"
import A from "./a"
import B from "./b"

if (window.location.pathname === "/a") {
	console.log("matched path a")
	ReactDOM.hydrate(<A />, document.getElementById("root"))
} else if (window.location.pathname === "/b") {
	console.log("matched path b")
	ReactDOM.hydrate(<B />, document.getElementById("root"))
} else {
	throw new Error("app: no such route; cannot hydrate")
}
