const { build } = require("esbuild")
const chokidar = require("chokidar")
const liveServer = require("live-server")
const markdownItPlugin = require("./markdown-it-plugin")

// Based on https://github.com/zaydek/esbuild-hot-reload.
;(async () => {
	const builder = await build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: ["src/index.tsx"],
		incremental: true,
		minify: process.env.NODE_ENV === "production",
		outfile: "build/script.js",
		plugins: [markdownItPlugin],
	})
	chokidar
		.watch("src/**/*.{ts,tsx}", {
			interval: 0,
		})
		.on("all", () => {
			builder.rebuild()
		})
	liveServer.start({
		file: "index.html",
		host: "localhost",
		open: true,
		port: +process.env.PORT || 8000,
		root: "build",
	})
})()
