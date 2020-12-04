import A from "./a"
import B from "./b"
import React from "react"

interface IRoutes {
	[key: string]: React.ReactElement
}

const routes: IRoutes = {
	"/a": <A />,
	"/b": <B />,
}

export default routes
