// Write a JavaScript function that accepts an array of numbers.
// Then use filter() to find only even numbers,
// after that: map() to double the numbers of that new array,
// and finally forEach() in order to
// print the results of the array you got from map()

// FUNCTION THAT RECEIVES AN ARRAY
// FILTER
// MAP
// FOREACH TO PRINT

function myFunction(number) {
    let even = number.filter(makeEven);
    let doubleEven = even.map(even)
    doubleEven.forEach(print)
}

function makeEven(value) {
    if (value % 2 === 0) {
        return true
    } else { return false }
}

function double(value) {
    return value * 2;
}

function print(value, index, arr) {
    console.log(value)
}

flightNumbers = [1, 2, 3, 4, 5]
let secondNumbers = [1212, 3, 21, 32, 13]

myFunction(numbers)
myFunction(otherNumbers)