// while loop = repeat the code as long as the condition is true
// (potentially it can also be infinite repetition)

let userName = prompt('Enter your username')

while (userName === "" || userName === null) {
    userName = prompt('Enter your username')
}

console.log('welcome: ', userName)