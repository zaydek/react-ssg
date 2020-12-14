import Index from "./index"
import React from "react"

interface IRoutes {
	// TODO: Add support for props, async code.
	[key: string]: React.ReactElement
}

const routes: IRoutes = {
	"/": <Index location="/" />,
	"/a": <Index location="/a" />,
	"/b": <Index location="/b" />,
}

export default routes
