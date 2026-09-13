//Bagian 17
const dummyProducts = [
    { title: "Laptop Asus", price: 1200, category: "laptops", rating: 4.8, thumbnail: "https://via.placeholder.com/100" },
    { title: "iPhone 13", price: 900, category: "phones", rating: 4.9, thumbnail: "https://via.placeholder.com/100" }
];

// Latihan 17.1
function renderProducts(products) {
    const container = document.querySelector("#product-list");
    container.innerHTML = ""; 
    
    for (const product of products) {
        const card = document.createElement("div");
        card.classList.add("product-card");
        
        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <hr>
        `;
        
        container.append(card);
    }
}

renderProducts(dummyProducts);