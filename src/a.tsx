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
	// return <a href="b">a -- click to open page b</a>
	return <button>a</button>
}
