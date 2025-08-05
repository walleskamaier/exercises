const temperatures = [25, 30, 18, 22, 30, 35]

// TODO: break the loop when encountering a temperature under 20
for (let temp of temperatures) {
  if (temp < 32) {
    console.log("It is very hot.")
    break
  } else if (temp > 25) {
    console.log("It is warm outside.")
    continue
  }
  console.log("Might be chilly, dress appropriately.")
}
