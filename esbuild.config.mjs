import esbuild from "esbuild"

await esbuild.build({
	entryPoints: ["index.ts"],
	bundle: true,
	platform: "node",
	outdir: "./dist",
})
