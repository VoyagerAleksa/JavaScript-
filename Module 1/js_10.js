const diceCount = Number(prompt("Enter number of dice:"));
const targetSum = Number(prompt("Enter target sum:"));

const simulations = 10000;
let successCount = 0;

for (let i = 0; i < simulations; i++) {
    let sum = 0;

    for (let d = 0; d < diceCount; d++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }

    if (sum === targetSum) {
        successCount++;
    }
}

const probability = (successCount / simulations) * 100;

document.getElementById("target").textContent =
    `Probability to get sum ${targetSum} with ${diceCount} dice is ${probability.toFixed(2)}%`;