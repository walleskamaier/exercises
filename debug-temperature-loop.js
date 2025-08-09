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

