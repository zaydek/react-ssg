import A from "./a"
import B from "./b"
import React from "react"
import { Link, Route, Switch } from "react-router-dom"

function Nav() {
	return (
		<div className="hstack space-16">
			<Link className="group" to="/">
				<div className="hstack w-160 h-32 bg-gray-200 group-touch:bg-gray-300 rounded-full transition">
					<div>React SSG</div>
				</div>
			</Link>
			<div className="spacer"></div>
			<Link className="group" to="/">
				<div className="hstack w-160 h-32 bg-gray-200 group-touch:bg-gray-300 rounded-full transition">
					<div>Open /</div>
				</div>
			</Link>
			<Link className="group" to="/a">
				<div className="hstack w-160 h-32 bg-gray-200 group-touch:bg-gray-300 rounded-full transition">
					<div>Open /a</div>
				</div>
			</Link>
			<Link className="group" to="/b">
				<div className="hstack w-160 h-32 bg-gray-200 group-touch:bg-gray-300 rounded-full transition">
					<div>Open /b</div>
				</div>
			</Link>
		</div>
	)
}

interface AppProps {
	greeting: string
}

// TODO: We should be able to compose routing based on a static data structure.
// Whether this is ideal or not I don’t know.
export default function App(props: AppProps) {
	return (
		<div className="container vstack align-start space-64 px-32 py-24">
			<Nav />
			<Switch>
				<Route path="/a" exact>
					<A {...props} />
				</Route>
				<Route path="/b" exact>
					<B {...props} />
				</Route>
				<Route path="/">
					<div>{props.greeting}</div>
				</Route>
			</Switch>
		</div>
	)
}
