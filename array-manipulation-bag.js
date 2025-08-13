// Let's simulate packing a bag for travel with Arrays and explore some operations!
let bag = ["t-shirt", "shorts", "sandals"]

// TODO: Add "sunglasses" to our bag at the end
bag.push("sunglasses")

// TODO: Insert "hat" into the bag at the position right after "t-shirt"
bag.splice(bag.indexOf("t-shirt") + 1, 0, "hat")

// Printing out our bag to see all items packed
console.log(bag)
// Expected output with TODOs completed: ['t-shirt', 'hat', 'shorts', 'sandals', 'sunglasses']
