import A from "./a"
import B from "./b"
import React from "react"
import { Link, Route, StaticRouter, Switch } from "react-router-dom"

function HelloWorld() {
	return (
		<>
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
