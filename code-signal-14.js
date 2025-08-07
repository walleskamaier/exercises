function split(s, delimiter) {
  return s.split(delimiter)
}

function join(arr, delimiter) {
  let joined = arr.join(delimiter)
  return joined
}

let astronautsData =
  "Buzz Aldrin,1930;Yuri Gagarin,1934;Valentina Tereshkova,1937"
let astronautsList = split(astronautsData, ";")
let cleanedAstronauts = []

astronautsList.forEach(function (astronaut) {
  cleanedAstronauts.push(join(split(astronaut, ","), " "))
})

cleanedAstronauts.forEach(function (cleanedAstronaut) {
  console.log(cleanedAstronaut)
  // Should output:
  // Buzz Aldrin 1930
  // Yuri Gagarin 1934
  // Valentina Tereshkova 1937
})
