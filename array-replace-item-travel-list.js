// Travel Packing List and Replacement
const packingList = ["clothes", "toothbrush", "passport", "camera"]

const itemToCheck = "passport"
const replacementItem = "sunglasses"

// TODO: Find the index of itemToCheck in the packingList
// TODO: Replace itemToCheck with replacementItem in the packingList using the index found
packingList.splice(packingList.indexOf(itemToCheck), 1, replacementItem)

// Print out the results
console.log("Updated Packing List: " + packingList)
