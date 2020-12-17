const env = JSON.stringify(process.env.NODE_ENV || "development")

require("esbuild").buildSync({
	bundle: true,
	define: { "process.env.NODE_ENV": env },
	entryPoints: ["src/index.tsx"],
	minify: process.env.NODE_ENV === "production",
	outfile: "dist/script.js",
})
