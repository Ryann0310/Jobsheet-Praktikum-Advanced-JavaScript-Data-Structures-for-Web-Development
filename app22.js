// Bagian 22 
function fetchProductsDenganPromise() {
    state.status = "loading";
    render();

    fetch("https://dummyjson.com/products?limit=30")
        .then(response => {
            if (!response.ok) throw new Error("HTTP error");
            return response.json();
        })
        .then(data => {
            state.products = data.products;
            state.status = "success";
        })
        .catch(error => {
            console.error(error);
            state.status = "error";
        })
        .finally(() => {
            render();
        });
}