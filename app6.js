//Bagian 6
const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 4.8 },
    { id: 4, title: "Gaming Laptop", price: 1500, category: "laptops", stock: 2, rating: 4.9 }
];
// Latihan 6.1: 
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}

// Latihan 6.2: 
function searchProductById(products, targetId) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === targetId) return products[i];
    }
    return null;
}
console.log("Produk ID 2:", searchProductById(products, 2));