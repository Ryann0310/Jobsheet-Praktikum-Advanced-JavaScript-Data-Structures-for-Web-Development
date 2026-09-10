//Bagian 3
const productsNested = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: { width: 30, height: 2, depth: 20 },
        reviews: [
            { user: "A", rating: 5, comment: "Good product" },
            { user: "B", rating: 4, comment: "Worth it" }
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        tags: ["mobile", "electronics"],
        dimensions: { width: 7, height: 0.8, depth: 15 },
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    }
];

// 1
const allTagsNested = productsNested.map(p => p.tags);

// 2
function findProductsByTag(products, tag) {
    return products.filter(p => p.tags.includes(tag));
}

// 3
const reviewCounts = productsNested.map(p => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length
}));

// 4
const fiveStarReviews = productsNested
    .flatMap(p => p.reviews) 
    .filter(r => r.rating === 5);

// 5
const averageManualRatings = productsNested.map(p => {
    const totalScore = p.reviews.reduce((sum, review) => sum + review.rating, 0);
    const avg = totalScore / p.reviews.length;
    return { title: p.title, averageRating: avg };
});

// 6
const mostReviewedProduct = productsNested.reduce((maxProduct, currentProduct) => {
    return currentProduct.reviews.length > maxProduct.reviews.length ? currentProduct : maxProduct;
}, productsNested[0]);

// 7
const allRatingValues = productsNested.flatMap(p => p.reviews.map(r => r.rating));

console.log(findProductsByTag(productsNested, "electronics"));
console.log(reviewCounts);

//Bagian 4
// Latihan 4.1
const allTagsFlat = productsNested.flatMap(p => p.tags);
console.log("Semua Tags:", allTagsFlat);

// Latihan 4.2
const allComments = productsNested.flatMap(p => 
    p.reviews.map(review => review.comment)
);
console.log("Semua Comments:", allComments);