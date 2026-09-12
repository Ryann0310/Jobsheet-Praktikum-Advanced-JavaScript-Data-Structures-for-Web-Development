// Data bagian 9
const products = [
    { id: 1, title: "Laptop", category: "electronics", rating: 4.8, tags: ["tech", "work"] },
    { id: 2, title: "Phone", category: "electronics", rating: 4.2, tags: ["tech", "mobile"] },
    { id: 3, title: "Apple", category: "groceries", rating: 4.9, tags: ["food", "fresh"] }
    ];

// Latihan 13.1
class Stack {
    constructor() { this.items = []; }
    push(item) { this.items.push(item); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
}

// Latihan 13.2
const searchHistory = new Stack();
searchHistory.push("laptop");
searchHistory.push("phone");

console.log("Keyword terakhir:", searchHistory.peek()); 
searchHistory.pop(); 
console.log("Setelah undo, keyword menjadi:", searchHistory.peek());