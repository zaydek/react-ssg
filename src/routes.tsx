import type { IRoutes } from "./server/types"

// These are the prerendered routes.
export default {
	"/": {
		title: "Hello, world!",
	},
	"/a": {
		title: "Page A",
	},
	"/b": {
		title: "Page B",
	},
} as IRoutes
