import App from "./app"
import React from "react"

interface IRoutes {
	// TODO: Add support for props, async code.
	[key: string]: React.ReactElement
}

// TODO: Do we need this? Should this be in client or server?
const routes: IRoutes = {
	"/": <App /* location="/" */ />,
	"/a": <App /* location="/a" */ />,
	"/b": <App /* location="/b" */ />,
}

export default routes
