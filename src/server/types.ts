export interface IRoute {
	// The React component to render: `Home` or `<Home>`.
	component: React.ReactNode | (() => JSX.Element)

	// getStaticPropsSync:
	// getStaticPropsAsync:
}

export interface IRoutes {
	[key: string]: IRoute
}
