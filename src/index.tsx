import A from "./a"
import B from "./b"
import React from "react"
import { Route, StaticRouter, Switch } from "react-router-dom"

function Nav() {
	return (
		<div className="hstack space-16 px-24 py-16">
			<a className="group" href="/">
				<div className="hstack w-160 h-32 bg-gray-200 group-touch:bg-gray-300 rounded-full transition">
					<div>React SSG</div>
				</div>
			</a>
			<div className="spacer"></div>
			<a className="group" href="/">
				<div className="hstack w-160 h-32 bg-gray-200 group-touch:bg-gray-300 rounded-full transition">
					<div>Open /</div>
				</div>
			</a>
			<a className="group" href="/a">
				<div className="hstack w-160 h-32 bg-gray-200 group-touch:bg-gray-300 rounded-full transition">
					<div>Open /a</div>
				</div>
			</a>
			<a className="group" href="/b">
				<div className="hstack w-160 h-32 bg-gray-200 group-touch:bg-gray-300 rounded-full transition">
					<div>Open /b</div>
				</div>
			</a>
		</div>
	)
}

export default function Index({ location }: { location: string }) {
	return (
		<StaticRouter location={location}>
			<Nav />
			<Switch>
				<Route path="/a" exact>
					<A />
				</Route>
				<Route path="/b" exact>
					<B />
				</Route>
			</Switch>
		</StaticRouter>
	)
}
