function render() {

    if (state.status === "loading") {
        document.getElementById("product-list").innerHTML = "<p>Loading...</p>";
        return; 
    }

    let filteredProducts = [...state.products];

    filteredProducts = applySearchFilter(filteredProducts, state.search);

    const stats = getStatistics(filteredProducts);
    console.log("Statistik saat ini:", stats);
    
    const container = document.getElementById("product-list");
    container.innerHTML = filteredProducts.map(p => `
        <div class="card">
            <h3>${p.title}</h3>
            <p>Harga: $${p.price}</p>
        </div>
    `).join("");
}