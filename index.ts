import * as tools from "./tools.ts"

export type Material = {
	name: string
	percentage: number
}

export type FabricMaterial = Material[]

export type Shirt = {
	kind: "Clothing/Shirt"
	size: "S" | "M" | "L" | "XL" | "XXL"
	fabricMaterial: FabricMaterial
	collar: string
	shape: string
	sleeveLength: "Short" | "Long"
}

export type Jean = {
	kind: "Clothing/Jean"
	hipSize: number
	legSize: number
	fabricMaterial: FabricMaterial
	shape: string
	fastening: string
}

export type Clothing = Shirt | Jean

export type Sneakers = {
	kind: "Shoes/Sneakers"
}

export type Boots = {
	kind: "Shoes/Boots"
}

export type Shoes = Sneakers | Boots

export type Product = {
	id: number
	price: number
	item: Clothing | Shoes
}

const describeProduct = (product: Product) => {
	switch (product.item.kind) {
		case "Clothing/Shirt":
			return "This is a shirt!"
		case "Clothing/Jean":
			return "This is a jean!"
		case "Shoes/Sneakers":
			return "This is sneakers!"
		case "Shoes/Boots":
			return "This is boots!"
	}
}

const product: Product = {
	id: 123,
	price: 99,
	item: {
		kind: "Clothing/Shirt",
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
