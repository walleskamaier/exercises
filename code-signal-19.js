function solution(numbers) {
  let result = []
  let n = numbers.length

  for (let i = 0; i < n; i++) {
    let a = numbers[i]
    let b = numbers[n - i - 1]
    let geometricalMean = Math.sqrt(a * b).toFixed(2)
    result.push(`${a} ${geometricalMean}`)
  }
  return result
}

console.log(solution([1, 2, 3, 4, 5]))

module.exports = { solution }
