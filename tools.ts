import { getOpenApiReader, getOpenApiWriter, getTypeScriptReader, getTypeScriptWriter, makeConverter } from "typeconv"
import util from "node:util"

export async function getOpenApi() {
	const reader = getTypeScriptReader()
	const writer = getOpenApiWriter({ format: "json", title: "My API", version: "1.0.0" })
	const { convert } = makeConverter(reader, writer)
	const { data } = await convert({ cwd: ".", filename: "index.ts" })
	return data
}

export function printOpenApi(data: string) {
	console.log(util.inspect(JSON.parse(data).components.schemas, { depth: 5, colors: true }))
}

export async function generateTs(openApiSpec: string) {
	const reader = getOpenApiReader()
	const writer = getTypeScriptWriter()
	const { convert } = makeConverter(reader, writer)
	const { data } = await convert({ data: openApiSpec })
	return data
}
