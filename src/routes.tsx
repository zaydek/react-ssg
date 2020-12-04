import React from "react"

import A from "./a"
import B from "./b"
import Index from "./Index"

interface IRoutes {
	[key: string]: React.ReactElement
}

const routes: IRoutes = {
	"/": <Index />,
	"/a": <A />,
	"/b": <B />,
}

export default routes
