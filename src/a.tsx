import * as React from "react"

export default function A() {
	React.useEffect(() => {
		console.log("hello from a")
		const id = setInterval(() => {
			console.log("hello from a interval")
		}, 1e3)
		return () => {
			clearInterval(id)
			console.log("goodbye from a")
		}
	}, [])
	return (
		<div>
			<h1>Hello from a</h1>
			<a href="/b">goto b</a>
			<a href="/">goto /</a>
		</div>
	)
}
