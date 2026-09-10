//Bagian 2
const productsLevel2 = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

// Latihan 2.1
function findProductById(products, id) {
    return products.find(p => p.id === id);
}

// Latihan 2.2
const lowStockProducts = productsLevel2.filter(p => p.stock < 10);

function updateStock(products, id, newStock) {
    return products.map(p => 
        p.id === id ? { ...p, stock: newStock } : p
    );
}

console.log(findProductById(productsLevel2, 2));
console.log(lowStockProducts);
console.log(updateStock(productsLevel2, 1, 20));