// Tópicos sugeridos pelo Cris

// Sorting Algorithms
// Searching Algorithms
// Basic Data Structure Operations
// Queues
// Hashing

//sequência Fibonacci
//métodos do JS (.sort, .map, .filter, .reduce)

// Resolução do exercício

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

console.log(twoSum([11, 3, 15, 6], 9))

// O loop externo fixa um número
// O loop interno testa esse número com TODOS os que vêm depois
// Assim garantimos que testamos todos os pares possíveis
