let fruits = ["apple", "banana", "cherry", "date"]

let fruitsInSalad = ""

for (let i = 0; i < fruits.length - 1; i++) {
  fruitsInSalad += fruits[i] + " "
}
fruitsInSalad += fruits[fruits.length - 1]

console.log(fruitsInSalad)
