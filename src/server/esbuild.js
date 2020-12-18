const env = JSON.stringify(process.env.NODE_ENV || "development")

require("esbuild").buildSync({
	bundle: true,
	define: { "process.env.NODE_ENV": env },
	entryPoints: ["src/server/ssg.tsx"],
	loader: { ".md": "text" },
	outfile: "src/server/ssg.js",
	platform: "node",
})
