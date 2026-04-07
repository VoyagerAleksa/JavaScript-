function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const list = document.getElementById("results");
let result;

do {
    result = rollDice();

    const li = document.createElement("li");
    li.textContent = result;
    list.appendChild(li);

} while (result !== 6);
