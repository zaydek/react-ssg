import React from "react"
import { Link } from "react-router-dom"

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
		<div className="vstack align-start space-16">
			<div className="hstack align-self-start w-160 h-32 bg-gray-200 rounded-full">
				<div>This is page /b</div>
			</div>
			<Link className="group" to="/a">
				<div className="hstack w-160 h-32 bg-gray-200 group-touch:bg-gray-300 rounded-full transition">
					<div>Open /a</div>
				</div>
			</Link>
		</div>
	)
}
