//Bagian 8
const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 4.8 },
    { id: 4, title: "Gaming Laptop", price: 1500, category: "laptops", stock: 2, rating: 4.9 }
];
// Latihan 8.1
function bubbleSort(numbers) {
    const arr = [...numbers]; // Mencegah mutasi data asli[cite: 1]
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Menukar posisi jika urutannya salah[cite: 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Latihan 8.2
function sortProducts(products, sortBy) {
    const arr = [...products];
    if (sortBy === "price-asc") arr.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") arr.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") arr.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "title") arr.sort((a, b) => a.title.localeCompare(b.title));
    return arr;
}
console.log("Sort Harga Tertinggi:", sortProducts(products, "price-desc"));