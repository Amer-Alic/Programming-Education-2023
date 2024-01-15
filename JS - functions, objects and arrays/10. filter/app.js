// filter() = creates a new array with all elements
// that match the callBack function criteria

let year = [12, 18, 19, 13, 99, 66];

let older = year.filter(func);

function func(value) {
    return value >= 18
}

console.log(older)