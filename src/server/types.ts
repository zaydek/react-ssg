export interface IRoute {
	component: () => JSX.Element
	// TODO
}

export interface IRoutes {
	[key: string]: IRoute
}
