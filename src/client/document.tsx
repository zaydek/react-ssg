import React from "react"

// TODO: For all intents and purposes, this should be a pacakge-wide constant.
// We don’t want to encourage the user to change this, so we probably want to
// provide `SCRIPT_SRC` as a constant for developers to use.
//
// We probably want to take the approach that we *don’t* use a public folder
// and the `<Document>` element itself can be thought of as a React
// composition. That being said, we can provide this for all projects and
// prepopulate `SCRIPT_SRC` for the user.
//
const SCRIPT_SRC = "script.js"

interface DocumentProps {
	route: React.ReactNode
}

// `<Document>` is the entry point for all routes. All CDN-based CSS and JS
// dependencies should be linked here.
//
// For example:
//
// <link rel="stylesheet" href="https://..." />
// <script src="https://..." />
//
export default function Document({ route }: DocumentProps) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				{/* TODO: If we build to build then it make sense to nest public for
				static assets. Alternatively we can build to public and nest static
				for static assets. Either way, favicon.icon is a little confusing
				because it doesn’t make clear where static assets go. */}
				<link rel="icon" href="favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Web site created using create-react-app" />
				<title>SSG React App</title>
				{/* TODO: This assumes style.css never changes and or doesn’t support
				other CSS files. If we use a compositional API this is basically a
				solved problem. */}
				<link rel="stylesheet" href="style.css" />
			</head>
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root">{route}</div>
				<script src={SCRIPT_SRC}></script>
			</body>
		</html>
	)
}
