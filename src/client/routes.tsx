import App from "./app"
import * as React from "react"
import type { IRoutes } from "../server/types"

// TODO: Do we need this? Should this be in client or server?
const routes: IRoutes = {
	"/": <App /* location="/" */ />,
	"/a": <App /* location="/a" */ />,
	"/b": <App /* location="/b" */ />,
}

export default routes
