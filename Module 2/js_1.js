const prompt = require("prompt-sync")();

let numbers = [];

for (let i = 0; i < 5; i++) {
    let num = Number(prompt(`Enter the number ${i + 1}: `));
    numbers.push(num);
}

console.log("Numbers in reverse order:");

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}