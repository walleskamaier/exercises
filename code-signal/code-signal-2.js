let word = "FRUIT Salad"

let nonVowelCount = 0

for (let ch of word) {
  let lowerCh = ch.toLowerCase()
  if (
    lowerCh !== "a" &&
    lowerCh !== "e" &&
    lowerCh !== "i" &&
    lowerCh !== "o" &&
    lowerCh !== "u" &&
    ch !== " "
  )
    nonVowelCount++
}

console.log(nonVowelCount)
