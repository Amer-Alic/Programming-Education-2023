// 1. define an ordinary function with the name "someFunction"

// 2nd function expression definition with the name "nekaDrugaFunkcija"

// 3rd definition arrow function with the name "nekaTrecaFunkcija"

// 4. use .forEach() for the specified array below using the arrow function
// and console.log() each element

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((value, index, arr) => {
    arr[index] = value * value
})



console.log(numbers)