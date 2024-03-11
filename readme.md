
# Algebraic Data Types & Typescript

Algebraic data types are a way of representing data by **combining** simple types using algebraic operations.
There are two main kinds of algebraic types: product types and sum types. Discriminated unions are a specific implementation of sum types.

## Product types (AND types)

Product types represent a combination of types.

```typescript
type Shirt = {
    size: string
    sleeveLength: string
    shape: string
}
```

## Sum types (OR types)

Sum types represent a choice between types.

```typescript
type ShirtSize = "S" | "M" | "L" | "XL" | "XXL"
type SleeveLength = "Short" | "Long"
```

## Compose

Compose small types from other small types.

```typescript
type SleeveLength = "Short" | "Long"

type Shirt = {
    size: "S" | "M" | "L" | "XL" | "XXL"
    sleeveLength: SleeveLength
    shape: string
}
```

## Pattern Matching

It's possible by adding a "kind" field to the product type.

```typescript
type SleeveLength = "Short" | "Long"

type Shirt = {
    kind: "Shirt"
    size: "S" | "M" | "L" | "XL" | "XXL"
    sleeveLength: SleeveLength
    shape: string
}

type Jean = {
    kind: "Jean"
    hipSize: number
    legSize: number
    ...
}

type Clothing = Shirt | Jean

const clothing: Clothing = {
    kind: "Shirt",
    size: "L",
    sleeveLength: "Short",
    shape: "Straight",
}

const describeClothing = (clothing: Clothing) => {
    switch (clothing.kind) {
        case "Shirt": return "This is a shirt!"
        case "Jean": return "This is a jean!"
    }
}
```

You can go further by adding sections to kinds in order to combine Clothing and Shoes.

- `kind: "Clothing/Shirt"`
- `kind: "Clothing/Jean"`
- `kind: "Shoes/Sneakers"`
- `kind: "Shoes/Boots"`

```typescript
type Product = {
    id: number
    price: Price
    item: Clothing | Shoes
}
```

## OpenAPI

In OpenAPI specification, sum types are represented by `anyOf`.

```json
"Clothing": {
    "anyOf": [
        { "$ref": "#/components/schemas/Shirt", "title": "Clothing" },
        { "$ref": "#/components/schemas/Jean", "title": "Clothing" }
    ],
    "title": "Clothing"
},
```
