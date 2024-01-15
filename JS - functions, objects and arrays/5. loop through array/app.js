// loop through the array
// loop through each element separately.

let nasaList = [1, 2, 0, 4, 78, 'woof'];

nasaList.push('cuko');
nasaList.pop();

for (let i = nasaList.length - 1; i >= 0; i--) {
    console.log(nasaList[i])
}