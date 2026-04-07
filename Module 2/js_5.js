const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function ask() {
    rl.question("Enter a number: ", (answer) => {
        let num = Number(answer);

        if (numbers.includes(num)) {
            console.log(`Number ${num} was already entered.`);

            numbers.sort((a, b) => a - b);
            console.log(numbers);

            rl.close();
        } else {
            numbers.push(num);
            ask();
        }
    });
}

ask();