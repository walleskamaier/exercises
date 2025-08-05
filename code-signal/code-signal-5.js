// In your journey as a programmer, understanding how to debug code is crucial. In the starter code provided, a while loop iterates over an array of temperature readings, printing a particular message depending on the temperature value. However, the code contains an error that disrupts its proper execution. Your task is to locate and correct the mistake so that the program functions as intended. Take on the role of a debugger and get the code working correctly!

const temperatures = [25, 21, 17, 28, 35, 19, 22]
let i = 0
const listSize = temperatures.length

while (i < listSize) {
  if (temperatures[i] > 20) {
    console.log(`Temperature ${temperatures[i]} is greater than 20.`)
    i++
  } else {
    console.log(`Temperature ${temperatures[i]} might require a jacket.`)
    i++
  }
}

// rodei o código como tá agora e entrou em loop infinito
// o que percebi foi que ele não saiu do 25, ou seja, ele não incrementou o índice (i) do array

// a resolução foi incrementar o índice nos dois if e incluir o else
