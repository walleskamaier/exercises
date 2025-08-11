function specialOrder(inputString) {
  let result = []
  let length = inputString.length

  // First add characters from the last until the middle
  for (let i = length - 1; i >= Math.floor(length / 2); i--) {
    result.push(inputString[i])
  }

  // Then add characters from the beginning until the middle
  for (let i = 0; i < Math.floor(length / 2); i++) {
    result.push(inputString[i])
  }
  return result.join("")
}

console.log(specialOrder("abcdefg")) //should return "gfedabc"
