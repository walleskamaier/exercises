function repeatCharJump(inputString, step) {
  let result = []
  const length = inputString.length
  const used = new Array(length).fill(false)
  let current = 0
  let count = 0

  while (count < length) {
    if (!used[current]) {
      result.push(inputString[current])
      used[current] = true
      count++
    }
    current = (current + step) % length
  }

  return result.join("")
}

// Exemplo de uso:
console.log(repeatCharJump("abcdefg", 3)) // Deve retornar "adgcfbe"
