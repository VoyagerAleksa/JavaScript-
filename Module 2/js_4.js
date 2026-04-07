const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function ask() {
    rl.question("Enter a number: ", (answer) => {
        let num = Number(answer);

        if (num === 0) {
            numbers.sort((a, b) => b - a);
            console.log("Numbers from largest to smallest:");
            console.log(numbers);
            rl.close();
        } else {
            numbers.push(num);
            ask();
        }
    });
}

ask();