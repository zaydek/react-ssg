import A from "./a"
import B from "./b"
import C from "./c"
import React from "react"
import Title from "./lib/Title"
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
			<Link className="group" to="/c">
				<div className="hstack w-160 h-32 bg-gray-200 group-touch:bg-gray-300 rounded-full transition">
					<div>Open /c</div>
				</div>
			</Link>
		</div>
	)
}

function Container({ children }: { children?: React.ReactNode }) {
	return (
		<div className="container vstack align-start space-64 px-32 py-24">
			<Nav />
			{children}
		</div>
	)
}

// TODO: We should be able to compose routing based on a static data structure.
// Whether this is ideal or not I don’t know.
// TODO: Is there a way to extract routes from JSX?
export default function App() {
	return (
		<Switch>
			{/* 200 */}
			<Route path="/" exact>
				<Container>
					<Title title="Hello, world!">
						<div>Hello, world!</div>
					</Title>
				</Container>
			</Route>
			<Route path="/a" exact>
				<Container>
					<Title title="Page A">
						<A />
					</Title>
				</Container>
			</Route>
			<Route path="/b" exact>
				<Container>
					<Title title="Page B">
						<B />
					</Title>
				</Container>
			</Route>
			<Route path="/c" exact>
				<Container>
					<Title title="Page C">
						<C />
					</Title>
				</Container>
			</Route>
			{/* 404 */}
			<Route path="/404" exact>
				{/* No-op */}
			</Route>
		</Switch>
	)
}
