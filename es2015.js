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

    const arr = [1, "hello", 3];
    const [ first, second, third ] = arr;
    console.log(first);
    console.log(second);
    console.log(third);
};

// import and export

// promises
const promises = () => {
    const myPromise = () => {
        return new Promise((resolve, reject) => {
            resolve("hello");
        });
    };

    console.log(myPromise());
};

// rest parameter
const restParam = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const [first, second, ...rest] = arr;

    console.log(first);
    console.log(second);

    const str = rest.reduce((temp, num) => (temp + num), "");
    console.log(str);
};

// spread operator
const spread = () => {
    const print = (first, second, third) => {
        console.log(first);
        console.log(second);
        console.log(third);
    };

    const arr = [1, 2, 3];
    print(...arr);
};

// classes

module.exports = {
    keywords,
    arrow,
    literal,
    defaultParam,
    destructure,
    promises,
    restParam,
    spread
}