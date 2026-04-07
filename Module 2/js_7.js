function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const list = document.getElementById("results");


const sides = Number(prompt("Enter number of sides on the dice:"));

let result;

do {
    result = rollDice(sides);

    const li = document.createElement("li");
    li.textContent = result;
    list.appendChild(li);

} while (result !== sides);