const markdownIt = require("markdown-it")()

const markdownItPlugin = {
	name: "markdown-it",
	setup(build) {
		const fs = require("fs")
		build.onLoad({ filter: /\.md$/ }, async args => {
			const text = await fs.promises.readFile(args.path, "utf8")
			return {
				contents: markdownIt.render(text),
				loader: "text",
			}
		})
	},
}

require("esbuild")
	.build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: ["src/server/ssg.tsx"],
		outfile: "src/server/ssg.js",
		platform: "node",
		plugins: [markdownItPlugin],
	})
	.catch(err => {
		console.error(err)
		process.exit(1)
	})
