// Data bagian 9
const products = [
    { id: 1, title: "Laptop", category: "electronics", rating: 4.8, tags: ["tech", "work"] },
    { id: 2, title: "Phone", category: "electronics", rating: 4.2, tags: ["tech", "mobile"] },
    { id: 3, title: "Apple", category: "groceries", rating: 4.9, tags: ["food", "fresh"] }
    ];
    
// Latihan 11.1: Mengambil kategori unik menggunakan Set
const uniqueCategories = [...new Set(products.map(p => p.category))];
console.log("Kategori Unik:", uniqueCategories);