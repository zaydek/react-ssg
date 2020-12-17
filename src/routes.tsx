import React from "react"
import type { IRoutes } from "./server/types"

export default {
	"/": (
		<>
			<link rel="icon" href="favicon.ico" />
			<title>Hello, world!</title>
			<meta name="description" content="Web site created using create-react-app" />
		</>
	),
	"/a": (
		<>
			<link rel="icon" href="favicon.ico" />
			<title>Page A</title>
			<meta name="description" content="Web site created using create-react-app" />
		</>
	),
	"/b": (
		<>
			<link rel="icon" href="favicon.ico" />
			<title>Page B</title>
			<meta name="description" content="Web site created using create-react-app" />
		</>
	),
} as IRoutes
