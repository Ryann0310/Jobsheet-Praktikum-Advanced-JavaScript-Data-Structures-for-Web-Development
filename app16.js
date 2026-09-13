// Bagian 16
// Latihan 16.1
const dataBanyak = Array.from({ length: 10000 }, (_, i) => i + 1); // [1, 2, 3, ... 10000]
const targetCari = 9999;

function testLinear(arr, target) {
    let steps = 0;
    for (let i = 0; i < arr.length; i++) {
        steps++;
        if (arr[i] === target) return steps;
    }
}

function testBinary(arr, target) {
    let steps = 0;
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        steps++;
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return steps;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
}

console.log("=== Perbandingan Kompleksitas ===");
console.log("Langkah Linear Search:", testLinear(dataBanyak, targetCari)); // Output: ~9999 langkah
console.log("Langkah Binary Search:", testBinary(dataBanyak, targetCari)); // Output: ~13 langkah