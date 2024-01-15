// IF = if something is true DO IT; if something is incorrect, DON'T DO IT;
// ELSE IF = if IF is false check NEW CONDITION;
// ELSE = if nothing is true above do this;

let age = 88;

if (age > 65) {
    console.log("You are an older person")
}
else if (age >= 18) {
    console.log("Come of age")
} else if (age < 18) {
    console.log("You are not of legal age")
}
else {
    console.log("You are dead")
}