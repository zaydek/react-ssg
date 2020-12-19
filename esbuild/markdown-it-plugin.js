const markdownIt = require("markdown-it")()

module.exports = {
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
