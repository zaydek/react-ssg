// export interface IRoute {
// 	title: string
// }

export type IRoute = null | {
	title: string
}

export interface IRoutes {
	[key: string]: IRoute
}
