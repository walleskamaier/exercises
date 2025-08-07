function encryptString(text) {
  let encrypted = ""
  for (let i = 0; i < text.length; i++) {
    let c = text[i]
    if (/[a-yA-Y]/.test(c)) {
      encrypted += String.fromCharCode(c.charCodeAt(0) + 1)
    } else if (c === "z") {
      encrypted += "a"
    } else if (c === "Z") {
      encrypted += "A"
    } else {
      encrypted += c
    }
  }
  return encrypted
}

console.log("The encrypted text is: " + encryptString("Hello, Java!")) // Should print out "Ifmmp, Kbwb!"
