const temperatures = [16, 21, 20, 14, 22, 19, 13]

for (let temp of temperatures) {
  if (temp > 30) {
    console.log("It's really hot.")
    break
  } else if (temp < 20) {
    console.log("It's quite chilly.")
    continue
  }

  console.log("Lovely weather.")
}
