// arguments object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments)
    return a * b
}

console.log(add(2, 3))

// this keyword - no longer bound

// const user = {
//     name: "Chandan",
//     cities: ['kolkata', 'Delhi'],
//     printPlacesLived: function () {
//         console.log(this.name)
//         console.log(this.cities)
//         const that = this
//         this.cities.forEach(function (city) {
//             console.log(that.name + " has lived in " + city)
//         });
//     }
// };

// const user = {
//     name: "Chandan",
//     cities: ['kolkata', 'Delhi'],
//     printPlacesLived: function () {
//         this.cities.forEach((city) => {
//             console.log(this.name + " has lived in " + city)
//         });
//     }
// };

const user = {
    name: "Chandan",
    cities: ['kolkata', 'Delhi'],
    printPlacesLived() {
        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city)
        // });

        return this.cities.map(city => this.name + " has lived in " + city)
    }
};

console.log(user.printPlacesLived())


const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())