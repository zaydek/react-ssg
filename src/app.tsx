import A from "./A"
import B from "./B"
import C from "./C"
import React from "react"
import DocumentTitle from "./lib/DocumentTitle"
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

function Wrapper({ children }: { children?: React.ReactNode }) {
	return (
		<div className="container vstack align-start space-64 px-32 py-24">
			<Nav />
			{children}
		</div>
	)
}

export default function App() {
	return (
		<Switch>
			{/* 200 */}
			<Route path="/" exact>
				<DocumentTitle title="Page /">
					<Wrapper>
						<div>Hello, world!</div>
					</Wrapper>
				</DocumentTitle>
			</Route>
			<Route path="/a" exact>
				<DocumentTitle title="Page /a">
					<Wrapper>
						<A />
					</Wrapper>
				</DocumentTitle>
			</Route>
			<Route path="/b" exact>
				<DocumentTitle title="Page /b">
					<Wrapper>
						<B />
					</Wrapper>
				</DocumentTitle>
			</Route>
			<Route path="/c" exact>
				<DocumentTitle title="Page /c">
					<Wrapper>
						<C />
					</Wrapper>
				</DocumentTitle>
			</Route>
			{/* 404 */}
			<Route path="/">
				<div>TODO</div>
			</Route>
		</Switch>
	)
}
