// callback = the function we send as
// argument to another function

function displayConsole(result) {
    console.log(result)
}

function displayDOM(v) {
    document.getElementById("title").innerText = v;
}

function sum(x, y, func) {
    let result = x + y;
    func(result);
}

sum(22, 2, displayConsole);
sum(9, 1, displayDOM)