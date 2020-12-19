const { build } = require("esbuild")
const { check } = require("./utils")
const { execSync } = require("child_process")
const fs = require("fs")
const markdownItPlugin = require("./markdown-it-plugin")
const sass = require("sass")

;(() => {
	const msg = execSync("rm -rf build && mkdir build").toString()
	if (msg) {
		throw new Error(msg)
	}
	build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: ["src/server/prerender.tsx"],
		outfile: "src/server/prerender.js",
		platform: "node", // Needed for `fs`
		plugins: [markdownItPlugin],
	}).catch(err => {
		if (err) {
			throw err
		}
	})
	const res = sass.renderSync({
		file: "src/style.scss",
		outputStyle: "compressed",
	})
	const [, err] = check(() => fs.writeFileSync("build/style.css", res.css.toString(), "utf8"))
	if (err) {
		if (err) {
			throw err
		}
	}
})()
