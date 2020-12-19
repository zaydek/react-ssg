const { build } = require("esbuild")
// const { execSync } = require("child_process")
const markdownItPlugin = require("./markdown-it-plugin")

;(() => {
	// const msg = execSync("rm -rf build && mkdir build").toString()
	// if (msg) {
	// 	throw new Error(msg)
	// }
	build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: ["src/index.tsx"],
		minify: process.env.NODE_ENV === "production",
		outfile: "build/script.js",
		plugins: [markdownItPlugin],
	}).catch(err => {
		if (err) {
			throw err
		}
	})
})()
