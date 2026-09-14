//Bagian 20
// Latihan 20
const getStatistics = (products) => {
    const prices = products.map(({ price }) => price); 
    
    return {
        totalProducts: products.length,
        averagePrice: prices.reduce((a, b) => a + b, 0) / products.length,
        highestPrice: Math.max(...prices),
        lowestPrice: Math.min(...prices),
        
        totalStock: products.reduce((sum, { stock }) => sum + (stock ?? 0), 0),

        averageRating: products.reduce((sum, product) => sum + (product?.rating ?? 0), 0) / products.length
    };
};