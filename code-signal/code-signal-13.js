function countDigits(inputText) {
  let count = 0

  for (let i = 0; i < inputText.length; i++) {
    let digit = inputText[i]
    if (/[0-9]/.test(digit)) {
      count++
    }
  }
  return `Number of digits: ${count}`
}

console.log(countDigits("Hello123, JavaScript World 2023!"))
