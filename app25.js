//Bagian 25
function getStatistics(productsArray) {
    const prices = productsArray.map(p => p.price);
    return {
        totalProducts: productsArray.length,
        averagePrice: prices.reduce((a, b) => a + b, 0) / productsArray.length,
        totalStock: productsArray.reduce((sum, p) => sum + p.stock, 0),
        averageRating: productsArray.reduce((sum, p) => sum + p.rating, 0) / productsArray.length
    };
}

function applySearchFilter(productsArray, keyword) {
    if (!keyword) return productsArray; 
    

    const lowerKeyword = keyword.toLowerCase();
    
    return productsArray.filter(product => 
        product.title.toLowerCase().includes(lowerKeyword)
    );
}