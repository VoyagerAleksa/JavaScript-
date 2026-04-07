function concat(strings) {
    let result = "";

    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
    }

    return result;
}

// можно задать массив вручную
const fruits = ["Apple", "Banana", "Cherry"];

const finalString = concat(fruits);

document.getElementById("result").textContent = finalString;