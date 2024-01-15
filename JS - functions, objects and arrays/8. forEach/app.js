// forEach() = execute callBack function
// on each array element separately

let numbers = [122, 112, 333, 3124, 521312];
let sum = 0;

numbers.forEach(callBackFunction)

function callBackFunction(value) {
    sum += value;
    console.log(sum)
}