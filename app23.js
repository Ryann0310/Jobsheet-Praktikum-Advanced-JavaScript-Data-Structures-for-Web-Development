// Bagian 23
async function fetchProductsDenganAsync() {
    state.status = "loading";
    render();

    try {
        const response = await fetch("https://dummyjson.com/products?limit=30");
        if (!response.ok) throw new Error("HTTP error");
        
        const data = await response.json();
        
        state.products = data.products;
        state.status = "success";
    } catch (error) {
        console.error(error);
        state.status = "error";
    } finally {
        render();
    }
}