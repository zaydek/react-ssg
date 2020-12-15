// import A from "./a"
import type { IRoutes } from "../server/types"

// TODO: Do we need this? Should this be in client or server?
// TODO: Add support for key.
const routes: IRoutes = {
	"/": {
		getProps() {
			return {
				greeting: "Hello, world! (/)",
			}
		},
	},
	"/a": {
		getProps() {
			return {
				greeting: "Hello, world! (/a)",
			}
		},
	},
	"/b": {
		getProps() {
			return {
				greeting: "Hello, world! (/b)",
			}
		},
	},
}

export default routes
