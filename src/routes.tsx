import React from "react"
import type { Routes } from "./server/types"

// prettier-ignore
export default {
	"/": {
		metadata: <>
			<link rel="icon" href="favicon.ico" />
			<title>Hello, world!</title>
			<meta name="description" content="Web site created using create-react-app" />
		</>,
	},
	"/a": {
		metadata: <>
			<link rel="icon" href="favicon.ico" />
			<title>Page A</title>
			<meta name="description" content="Web site created using create-react-app" />
		</>,
	},
	"/b": {
		metadata: <>
			<link rel="icon" href="favicon.ico" />
			<title>Page B</title>
			<meta name="description" content="Web site created using create-react-app" />
		</>,
	},
} as Routes
