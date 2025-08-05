// Change the current code so that the loop stops when it encounters a temperature below 20 degrees Celsius rather than stopping at the current temperature threshold. Observe how the break statement alters the control flow in JavaScript.

const temperatures = [25, 30, 18, 22, 30, 35]

// TODO: break the loop when encountering a temperature under 20
for (let temp of temperatures) {
  if (temp < 20) {
    console.log("It's too cold")
    break
  } else if (temp > 25) {
    console.log("It is warm outside.")
    continue
  }
  console.log("Might be chilly, dress appropriately.")
}
