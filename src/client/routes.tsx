import App from "./app"
import type { IRoutes } from "../server/types"

// TODO: Do we need this? Should this be in client or server?
// TODO: Add support for key.
const routes: IRoutes = {
	"/": {
		component: App,
		exact: true,
		// getProps() {
		// 	return {
		// 		greeting: "Hello, world! (/)",
		// 	}
		// },
	},
	"/a": {
		component: App,
		exact: true,
		// getProps() {
		// 	return {
		// 		greeting: "Hello, world! (/a)",
		// 	}
		// },
	},
	"/b": {
		component: App,
		exact: true,
		// getProps() {
		// 	return {
		// 		greeting: "Hello, world! (/b)",
		// 	}
		// },
	},
}

export default routes
