//Bagian 5
const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 4.8 },
    { id: 4, title: "Gaming Laptop", price: 1500, category: "laptops", stock: 2, rating: 4.9 }
];

// Latihan 5.1
const laptopPrices = products
    .filter(p => p.category === "laptops")
    .map(p => p.price);
const avgLaptopPrice = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;

// Latihan 5.2
function getStatistics(products) {
    const prices = products.map(p => p.price);
    return {
        totalProducts: products.length,
        averagePrice: prices.reduce((a, b) => a + b, 0) / products.length,
        highestPrice: Math.max(...prices),
        lowestPrice: Math.min(...prices),
        totalStock: products.reduce((sum, p) => sum + p.stock, 0),
        averageRating: products.reduce((sum, p) => sum + p.rating, 0) / products.length
    };
}
console.log("Statistik:", getStatistics(products));
