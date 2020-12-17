// require("esbuild")
// 	.serve(
// 		{
// 			port: +process.env.PORT || 8333,
// 		},
// 		{
// 			bundle: true,
// 			define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
// 			entryPoints: ["src/app.tsx"],
// 			incremental: true,
// 			minify: process.env.NODE_ENV === "production",
// 			outfile: "public/out.js",
// 		},
// 	)
// 	.catch(error => {
// 		console.error(error)
// 		process.exit(1)
// 	})
// // .then(server => {
// // 	server.stop()
// // })

const env = JSON.stringify(process.env.NODE_ENV || "development")

require("esbuild").buildSync({
	bundle: true,
	define: { "process.env.NODE_ENV": env },
	entryPoints: ["src/index.tsx"],
	minify: process.env.NODE_ENV === "production",
	outfile: "dist/script.js",
})
