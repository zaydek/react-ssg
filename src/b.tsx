import React from "react"

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
	// return <a href="a">b -- click to open page a</a>
	return <button>b</button>
}
