// Bagian 7
const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 4.8 },
    { id: 4, title: "Gaming Laptop", price: 1500, category: "laptops", stock: 2, rating: 4.9 }
];
// Latihan 7.1
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Latihan 7.2
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

function binarySearchByPrice(sortedProducts, targetPrice) {
    let left = 0;
    let right = sortedProducts.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedProducts[mid].price === targetPrice) return sortedProducts[mid];
        if (sortedProducts[mid].price < targetPrice) left = mid + 1;
        else right = mid - 1;
    }
    return null;
}
console.log("Cari Harga 1200:", binarySearchByPrice(sortedByPrice, 1200));