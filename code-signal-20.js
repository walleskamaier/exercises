function solution(numbers) {
  let result = []

  for (let i = 0; i < numbers.length; i++) {
    const reverseNumber = Number(
      String(numbers[i]).split("").reverse().join("")
    )
    if (numbers.includes(reverseNumber)) {
      result.push([numbers[i], reverseNumber])
    }
  }

  return result
}

console.log(solution([12, 21, 34, 43, 56, 65]))
