export function isArmstrongNumber(number) {
    const str = number.toString()
    const len = str.length
    let sum = 0n
  
    for (let i = 0; i < len; i++) {
      const digit = BigInt(str[i])
      sum += digit ** BigInt(len)
    }

    const originalNumber = typeof number === 'bigint' ? number : BigInt(number);
    return sum === originalNumber;
}
  
  console.log(isArmstrongNumber(153))
