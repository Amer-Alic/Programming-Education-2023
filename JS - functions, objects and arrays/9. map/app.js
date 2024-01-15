// map() = execute the callBack function once
// on each array element AND CREATES A NEW ARRAY

let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(callBack);
let duplicateNumbers = numbers.map(callBack);

function callBack(item, typeOperation) {
    return Math.pow(item, 2);
    Math.pow(item, 4);
    Math.sqrt(item, 2);
}

console.log(squaredNumbers)