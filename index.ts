import * as tools from "./tools.ts"

export type Material = {
	name: string
	percentage: number
}

export type FabricMaterial = Material[]

export type Shirt = {
	kind: "Shirt"
	size: "S" | "M" | "L" | "XL" | "XXL"
	fabricMaterial: FabricMaterial
	collar: string
	shape: string
	sleeveLength: "Short" | "Long"
}

export type Jean = {
	kind: "Jean"
	hipSize: number
	legSize: number
	fabricMaterial: FabricMaterial
	shape: string
	fastening: string
}

export type Clothing = Shirt | Jean

export type Shoes = {
	kind: "Shoes"
}

export type Product = {
	id: number
	price: number
	item: Clothing | Shoes
}

const describeProduct = (product: Product) => {
	switch (product.item.kind) {
		case "Shirt":
			return "This is a shirt!"
		case "Jean":
			return "This is a jean!"
		case "Shoes":
			return "This is shoes!"
	}
}

const product: Product = {
	id: 123,
	price: 99,
	item: {
		kind: "Shirt",
		size: "L",
		fabricMaterial: [{ name: "Cotton", percentage: 100 }],
		collar: "Kent",
		shape: "Straight",
		sleeveLength: "Long",
	},
}

console.log(describeProduct(product))

console.log(JSON.stringify(product, null, 2))
console.log()

const spec = await tools.getOpenApi()
tools.printOpenApi(spec)
console.log(await tools.generateTs(spec))
