// Imagine you are in charge of tracking astronaut missions to various planets. You have a string containing astronaut names and the planets they are exploring. Your task is to write a JavaScript program that processes this string and prints out a summary of each astronaut's mission.

function processAstronautData(data) {
  let details = data.split(";")

  details.forEach((detail) => {
    // TODO: Split the detail into astronaut name and planet,
    //       and strip away the whitespace.
    let token = detail.split("-")
    let name = token[0].trim()
    let planet = token[1].trim()
    // TODO: Print the statement in the format "Astronaut [name] is exploring [planet]."
    console.log(`Astronaut ${name} is exploring ${planet}`)
  })
}

let astronautData = "    Neil-Mars; Buzz-Jupiter; Sally-Venus    "
processAstronautData(astronautData)
