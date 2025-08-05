export function canExecuteFastAttack(knightIsAwake) {
  // se knightIsAwake for true, então canExecuteFastAttack deve retornar false
  return knightIsAwake ? false : true
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  // se um deles, knightIsAwake OU archerIsAwake OU prisonerIsAwake for true, então canSpy deve retornar true. Se todos for false, retornar false
  return knightIsAwake || archerIsAwake || prisonerIsAwake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  // se archerIsAwake for false E prisonerIsAwake for true, então canSignalPrisoner deve retornar true
  return !archerIsAwake && prisonerIsAwake
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  // cenário1: se petDogIsPresent for true E archerIsAwake for false, canFreePrisoner deve retornar true
  // cenário2: se archerIsAwake E knightIsAwake for false E prisonerIsAwake for true, canFreePrisoner deve retornar true
  // para a função retornar true, o parâmetro archerIsAwake obrigatoriamente precisa ser false
  if (
    (!archerIsAwake && petDogIsPresent) ||
    (!archerIsAwake && !knightIsAwake && prisonerIsAwake)
  ) {
    return true
  } else {
    return false
  }
}

// Debugando
let archerIsAwake = false
let knightIsAwake = true
let prisonerIsAwake = true
let petDogIsPresent = true

console.log(
  `Cavaleiro acordado: ${knightIsAwake} → Posso atacar: ${canExecuteFastAttack(
    knightIsAwake
  )}`
)

console.log(
  `Arqueiro acordado: ${archerIsAwake} Prisioneiro acordado: ${prisonerIsAwake}  → Posso mandar sinal? ${canSignalPrisoner(
    archerIsAwake,
    prisonerIsAwake
  )}`
)

console.log(
  `Posso liberar o prisioneiro? ${canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
  )}`
)
