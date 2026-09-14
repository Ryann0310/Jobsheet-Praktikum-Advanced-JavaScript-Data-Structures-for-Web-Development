//Bagian 18
const initialProducts = [
    { title: "Laptop Asus", price: 1200, category: "laptops" },
    { title: "iPhone 13", price: 900, category: "phones" },
    { title: "Macbook Air", price: 1000, category: "laptops" }
];

const state = {
    products: initialProducts,
    search: "",
    category: "all",
    sortBy: "default",
    status: "success"
};

function render() {
    let hasil = [...state.products]; 

    if (state.category !== "all") {
        hasil = hasil.filter(p => p.category === state.category);
    }

    if (state.search) {
        const keyword = state.search.toLowerCase();
        hasil = hasil.filter(p => p.title.toLowerCase().includes(keyword));
    }

    if (state.sortBy === "price-asc") {
        hasil.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "price-desc") {
        hasil.sort((a, b) => b.price - a.price);
    }

    const container = document.querySelector("#product-list");
    container.innerHTML = hasil.map(p => 
        `<div style="border:1px solid #000; padding:10px; margin-bottom:10px;">
            <h3>${p.title}</h3>
            <p>Harga: $${p.price} | Kategori: ${p.category}</p>
        </div>`
    ).join("");
}