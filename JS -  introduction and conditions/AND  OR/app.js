// AND and OR give us the possibility to check several conditions at the same time
// AND - && (ALL CONDITIONS MUST BE TRUE)
// OR - || (ONLY ONE CONDITION MUST BE TRUE)

let temperature = 15;
let sunny = true;


if (temperature < 30 && temperature > 0 && sunny) {
    console.log("temperature is ok")
} else {
    console.log("Temperature is bad")
}