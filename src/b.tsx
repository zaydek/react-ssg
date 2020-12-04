import React from "react"

export default function B() {
	React.useEffect(() => {
		console.log("hello from a")
		return () => {
			console.log("goodbye from a")
		}
	}, [])
	return <>Hello, world! (B)</>
}
