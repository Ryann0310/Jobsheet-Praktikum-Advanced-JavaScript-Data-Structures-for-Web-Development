// Bagian 14
// Latihan 14.1
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }
    
    peek() {
        return this.items[0];
    }
}

// Testing 
const requestQueue = new Queue();
requestQueue.enqueue("Request 1");
requestQueue.enqueue("Request 2");
console.log("Diproses pertama:", requestQueue.dequeue()); 