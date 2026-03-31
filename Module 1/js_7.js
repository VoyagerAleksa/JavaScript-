const number = Number((prompt("Enter the number of dice: ")));
let result = 0;
for (let i = 0; i < number; i++) {
    // бросаем кубик: случайное число от 1 до 6
    const roll = Math.floor(Math.random() * 6) + 1;
    result += roll;
}

document.getElementById("target").textContent = "Sum of dice: " + result;