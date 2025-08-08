function solution(numbers) {
  let result = []
  let n = numbers.length

  for (let i = 0; i < Math.ceil(n / 2); i++) {
    const sum = numbers[i] + numbers[n - i - 1]
    result.push(sum)
  }
  return result
}

console.log(solution([5, -5, 10]))
