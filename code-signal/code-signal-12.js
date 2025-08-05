function encryptText(text) {
  let encrypted = ""
  for (let i = 0; i < text.length; i++) {
    let c = text[i]
    if (/[a-zA-Z]/.test(c)) {
      let shift = 3
      let code = c.charCodeAt(0)
      if (code >= 65 && code <= 90) {
        // Maiúsculas
        encrypted += String.fromCharCode(((code - 65 + shift) % 26) + 65)
      } else {
        // Minúsculas
        encrypted += String.fromCharCode(((code - 97 + shift) % 26) + 97)
      }
    } else {
      encrypted += c // Mantém caracteres que não são letras
    }
  }
  return encrypted
  
}
// Example text to encrypt
let originalText = "Hello, JavaScript!"
// The encryptText function call and console.log statement should remain the same as the solution
let encryptedText = encryptText(originalText)
console.log(encryptedText) // Correct output after TODO should be 'Khoor, MdydVfulsw!'
