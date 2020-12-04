import * as React from "react"
// import { Link } from "react-router-dom"

export default function B() {
	React.useEffect(() => {
		console.log("hello from b")
		const id = setInterval(() => {
			console.log("hello from b interval")
		}, 1e3)
		return () => {
			clearInterval(id)
			console.log("goodbye from b")
		}
	}, [])
	return (
		<>
			<h1>Hello from b</h1>
			<a href="/a">goto a</a>
			<a href="/">goto /</a>
		</>
	)
}
