// import ReactRouter from "react-router-dom"
//
// export interface IRoutes {
// 	[key: string]: ReactRouter.RouteProps
// }

export interface IRoute {
	// TODO: Add support for props, async code.
	component: React.ReactNode
}

export interface IRoutes {
	[key: string]: IRoute
}
