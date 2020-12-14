import App from "./app"
import React from "react"

interface IRoutes {
	// TODO: Add support for props, async code.
	[key: string]: React.ReactElement
}

const routes: IRoutes = {
	"/": <App location="/" />,
	"/a": <App location="/a" />,
	"/b": <App location="/b" />,
}

export default routes
