// Data bagian 9
const products = [
    { id: 1, title: "Laptop", category: "electronics", rating: 4.8, tags: ["tech", "work"] },
    { id: 2, title: "Phone", category: "electronics", rating: 4.2, tags: ["tech", "mobile"] },
    { id: 3, title: "Apple", category: "groceries", rating: 4.9, tags: ["food", "fresh"] }
    ];

// Latihan 12.1
function buildProductLookup(products) {
    const productMap = new Map();
    for (const product of products) {
        productMap.set(product.id, product);
    }
    return productMap;
}

const lookup = buildProductLookup(products);
console.log("Pencarian ID 2 super cepat:", lookup.get(2));