// Bagian 9 
const products = [
    { id: 1, title: "Laptop", category: "electronics", rating: 4.8, tags: ["tech", "work"] },
    { id: 2, title: "Phone", category: "electronics", rating: 4.2, tags: ["tech", "mobile"] },
    { id: 3, title: "Apple", category: "groceries", rating: 4.9, tags: ["food", "fresh"] }
];

// Latihan 9.1
function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const key = product.category;
        if (!groups[key]) groups[key] = [];
        groups[key].push(product);
        return groups;
    }, {});
}

// Latihan 10.1 & 10.2: Frequency Counting
function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}

// Menghitung frekuensi kategori dari produk
const categoriesArray = products.map(p => p.category);
console.log("Frekuensi Kategori:", countFrequency(categoriesArray));