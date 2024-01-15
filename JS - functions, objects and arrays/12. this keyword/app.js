// this = a special keyword to call the reference of the object we are working on
// the object we're working on depends on the context

let variable = {
    sound: "brr",
    numberofhorses: 80,
    model: "Mercedes",
    goQuick: function () {
        console.log(this.sound)
    },
    subModels: {
        mercedsClass: "fast",
        mercedesGClass: "large",
    }
}