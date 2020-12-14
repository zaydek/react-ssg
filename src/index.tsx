import A from "./a"
import B from "./b"
import React from "react"
import { Link, Route, StaticRouter, Switch } from "react-router-dom"

function HelloWorld() {
	return (
		<>
			<div className="hstack space-16 px-24 py-16">
				<div className="w-160 h-24 bg-gray-200 rounded-full"></div>
				<div className="w-160 h-24 bg-red-200 rounded-full"></div>
				<div className="w-160 h-24 bg-gray-200 rounded-full"></div>
			</div>

			<h1>Hello from /</h1>
			<Link to="/a">goto a</Link>
			<Link to="/b">goto b</Link>
		</>
	)
}

export default function Index() {
	return (
		<StaticRouter>
			<Switch>
				<Route path="/about">
					<A />
				</Route>
				<Route path="/users">
					<B />
				</Route>
				<Route path="/">
					<HelloWorld />
				</Route>
			</Switch>
		</StaticRouter>
	)
}
