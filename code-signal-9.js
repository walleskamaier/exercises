// Modify the loop so that, instead of altering letter cases, it counts the number of lowercase characters in the text. Use the final console.log statement to display the count.

const text = "JavaScript is awesome!"
// TODO: Modify the loop to count the number of lowercase characters
let count = 0

for (let i = 0; i < text.length; i++) {
  let c = text[i]
  if (c === c.toLowerCase() && c !== c.toUpperCase()) {
    count++
  }
}

// This should print the count of lowercase characters
console.log(count) // Initially outputs: "jAVAsCRIPT IS AWESOME!"
