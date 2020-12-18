export interface Route {
	metadata?: React.ReactNode
	component?: React.ReactNode
}

export interface Routes {
	[key: string]: null | Route
}
