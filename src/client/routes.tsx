import App from "./app"
import React from "react"
import type { IRoutes } from "../server/types"

// TODO: Do we need this? Should this be in client or server?
const routes: IRoutes = {
	"/": {
		component: <App />,
		// TODO
	},
	"/a": {
		component: <App />,
		// TODO
	},
	"/b": {
		component: <App />,
		// TODO
	},
}

export default routes
