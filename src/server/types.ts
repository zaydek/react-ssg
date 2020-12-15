// import type { RouteProps } from "react-router"

// export interface IRoute extends Omit<RouteProps, "component"> {
// 	// The React component to render: `Home` or `<Home>`.
// 	component: React.ReactNode | (() => JSX.Element)
//
// 	// Synchronous or asynchronous props-getter.
// 	//
// 	// TODO: Add asynchronous support.
// 	getProps?: () => any
// }

export interface IRoute {
	// // The React component to render: `Component` or `<Component>`.
	// component: React.ReactNode | (() => JSX.Element)

	// Synchronous or asynchronous props-getter.
	getProps?: () => any
}

export interface IRoutes {
	[key: string]: IRoute // RouteProps & { getProps?: () => any }
}
