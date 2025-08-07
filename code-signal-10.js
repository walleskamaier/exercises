// There is a piece of code intended to convert a given string to uppercase. However, there's a subtle bug in it. Your task is to spot the issue and fix it. Keep in mind that only letter characters in the string should be converted to uppercase.

function processText(text) {
  let newText = ""
  for (let i = 0; i < text.length; i++) {
    let c = text.charAt(i)
    if (/[a-zA-Z]/.test(c)) {
      newText += c.toUpperCase()
    } else {
      newText += c
    }
  }
  console.log("Processed Text:", newText)
}

processText("Happy Coding, Friends!")
