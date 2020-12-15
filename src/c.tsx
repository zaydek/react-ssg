import React, { useEffect } from "react"
import { Link } from "react-router-dom"

export default function C() {
	useEffect(() => {
		console.log("hello from c")
		const id = setInterval(() => {
			console.log("hello from c interval")
		}, 1e3)
		return () => {
			clearInterval(id)
			console.log("goodbye from c")
		}
	}, [])

	return (
		<div className="vstack align-start space-16">
			<div className="hstack align-self-start w-160 h-32 bg-gray-200 rounded-full">
				<div>/c</div>
			</div>
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
