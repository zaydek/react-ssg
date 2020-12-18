import App from "./App"
import React from "react"
import ReactDOM from "react-dom"
import routes from "./routes"
import { BrowserRouter } from "react-router-dom"

if (process.env.NODE_ENV === "development" || !routes[window.location.pathname]) {
	console.log("[debug] ReactDOM.render")
	ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		document.getElementById("root"),
	)
} else {
	console.log("[debug] ReactDOM.hydrate")
	ReactDOM.hydrate(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		document.getElementById("root"),
	)
}
