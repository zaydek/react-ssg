import type { IRoutes } from "./server/types"

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
