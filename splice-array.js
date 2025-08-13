// A packing list for a journey using JavaScript arrays
// let travelItems = ["passport", "camera", "sunscreen", "hat"]

// Currently, sunglasses are being appended to the list. Your task is to add them at index 2 instead.
// travelItems.push("sunglasses")
// console.log("Updated travel items:", travelItems)

let travelItems = ["passport", "camera", "sunscreen", "hat"]

travelItems.splice(2, 0, "sunglasses")
console.log("Updated travel items:", travelItems)
