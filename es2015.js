// const and let keywords
function keywords() {
    const temp1 = 1;
    const obj = {};
    const arr = [];

    try {
        temp1 = 2; // Const can't be reassigned
    } catch(e) {
        console.log(e.message);
    }

    obj['hello'] = 1; // obj = { 'hello': 1 }
    arr.push(1); // arr = [1]

    let temp2 = 2;
    temp2 = 3; // Let can be reassigned
}

// arrow function
const arrow = () => {
    console.log("Hello, I'm an arrow function");
};

// string literals
const literal = () => {
    const name = "Yarden";

    console.log(`${name}, you are so awesome!`);
};

// default parameter
const defaultParam = (threshold = 0.1) => {
    console.log("threshold = " + threshold);
};

// destructuring
const destructure = () => {
    const person = {
        firstName: "Yarden",
        lastName: "Ron",
        title: "King"
    };

    const { firstName, lastName, title: myTitle } = person;
    console.log(firstName);
    console.log(lastName);
    console.log(myTitle);
};

module.exports = {
    keywords,
    arrow,
    literal,
    defaultParam,
    destructure
}