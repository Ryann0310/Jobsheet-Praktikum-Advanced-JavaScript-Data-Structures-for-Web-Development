// Bagian 15
const categoriesNested = [
    { name: "Electronics", children: [
        { name: "Laptop", children: [] },
        { name: "Phone", children: [] }
    ]}
];

// Latihan 15.1
function printCategories(categories, depth = 0) {
    for (const category of categories) {
        console.log(" ".repeat(depth) + category.name);
        
        if (category.children.length > 0) {
            printCategories(category.children, depth + 1);
        }
    }
}

// Testing 
console.log("=== Struktur Kategori ===");
printCategories(categoriesNested);