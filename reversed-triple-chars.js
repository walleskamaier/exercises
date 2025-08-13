function reversedTripleChars(string) {
  let result = []
  // take characters in sets of three
  for (let i = 0; i < string.length; i += 3) {
    let newString = string.slice(i, i + 3)

    // if exactly three characters, reverse them
    if (newString.length === 3) {
      let reversedString = newString.split("").reverse().join("")
      result.push(reversedString)
    } else {
      result.push(newString)
    }
  }

  // join all groups back into a single string
  return result.join("")
}

console.log(reversedTripleChars("abcdefgh")) // should return "cbafedgh"
