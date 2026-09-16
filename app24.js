//Bagian 24
async function fetchProducts() {
    state.status = "loading";
    render(); 

    try {
        const response = await fetch("https://dummyjson.com/products?limit=30");
        ?[cite: 4]
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        const data = await response.json();
        state.products = data.products; 
        state.status = "success";

    } catch (error) {
        console.error("Gagal mengambil data:", error);
        state.status = "error";
    } finally {
        render(); 
    }
}