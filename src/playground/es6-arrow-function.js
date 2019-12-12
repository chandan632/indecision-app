const square = function (a) {
    return a * a
};

const squareArrow = (a) => {
    return a * a
}

console.log(squareArrow(2))

// const fullname = "chandan rout"

// const getFirstname = (fullname) => {
//     return fullname.split(" ")[0]
// }

const getFirstname = (fullname) => fullname.split(" ")[0]

console.log(getFirstname("chandan rout"))