import * as React from "react"
import * as ReactDOM from "react-dom"
import Index from "./index"

// prettier-ignore
ReactDOM.hydrate(
	<Index location={window.location.pathname} />,
	document.getElementById("root")
)
