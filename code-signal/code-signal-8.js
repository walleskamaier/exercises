// TODO: Define an array of temperatures
// TODO: Write a loop to go through each temperature in the array
// TODO: Add an 'if' statement to check if the temperature is over 30
// TODO: Print a message for being really hot and then exit the loop
// TODO: Add an 'else if' condition before the general temperature message to check if the temperature is below 15
// TODO: For temperatures that are too cold, print a specific message and skip to the next one
// TODO: Print a message saying the temperature is nice for all other cases

const temperatures = [21, 20, 14, 22, 34, 13]

for (let temp of temperatures) {
  if (temp > 30) {
    console.log("It's really hot.")
    break
  } else if (temp < 15) {
    console.log("It's quite chilly.")
    continue
  }
  console.log("The temperature is nice.")
}
