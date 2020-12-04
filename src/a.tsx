import * as React from "react"

export default function A() {
	React.useEffect(() => {
		console.log("hello from a")
		return () => {
			console.log("goodbye from a")
		}
	}, [])
	return <>Hello, world! (A)</>
}
