// const { createElement } = require("react")
const markdown = require("markdown-it")()

const env = JSON.stringify(process.env.NODE_ENV || "development")

const markdownPlugin = {
	name: "markdown",
	setup(build) {
		let fs = require("fs")

		build.onLoad({ filter: /\.md$/ }, async args => {
			const text = await fs.promises.readFile(args.path, "utf8")
			const __html = markdown.render(text)
			// const rendered = createElement("div", { dangerouslySetInnerHTML: { __html } })
			return {
				// contents: rendered,
				contents: __html,
				loader: "text",
			}
		})
	},
}

require("esbuild")
	.build({
		bundle: true,
		define: { "process.env.NODE_ENV": env },
		entryPoints: ["src/index.tsx"],
		minify: process.env.NODE_ENV === "production",
		outfile: "dist/script.js",
		plugins: [markdownPlugin],
	})
	.catch(err => {
		console.error(err)
		process.exit(1)
	})
