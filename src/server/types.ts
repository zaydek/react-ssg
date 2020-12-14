export interface IRoute {
	// The React component to render: `Home` not `<Home>`.
	component: React.ReactNode

	// getStaticPropsSync:
	// getStaticPropsAsync:
}

export interface IRoutes {
	[key: string]: IRoute
}
