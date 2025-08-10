function solution(n) {
  let count = 0
  let previousDigit = -1 

  while (n > 0) {
    const currentDigit = n % 10

    if (currentDigit === previousDigit) {
      count++
    }

    previousDigit = currentDigit
    n = Math.floor(n / 10)
  }

  return count
}

console.log(solution(113224)) 
