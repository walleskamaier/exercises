// In our weather display program, we want to refine the output according to the day's temperatures. Complete the given JavaScript code so that it outputs clothing recommendations based on temperature readings.

const temperatures = [16, 14, 20, 22, 19, 13]

// Loop through the temperatures to suggest clothing
for (const temp of temperatures) {
  if (temp < 15) {
    console.log("Wear warm clothes.")
  } else if (temp >= 20) {
    // TODO: Print a suggestion to wear light clothes.
    console.log("Wear light cloths")
    // TODO: Add a line here that will skip the final print statement when it's warm enough for light clothes.
  } else {
    console.log("Consider a light jacket.") // Suggestion for in-between temperatures
  }
}
