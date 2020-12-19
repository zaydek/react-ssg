const { build } = require("esbuild")
const markdownItPlugin = require("./markdown-it-plugin")

;(() => {
	build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: ["src/server/prerender.tsx"],
		outfile: "src/server/prerender.js",
		platform: "node", // Needed for `fs`
		plugins: [markdownItPlugin],
	}).catch(err => {
		console.error(err)
		process.exit(1)
	})
})()
