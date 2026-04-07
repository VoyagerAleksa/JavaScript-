function even(numbers) {
    let evens = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        }
    }

    return evens;
}


const original = [2, 7, 4, 9, 12, 5];

const evens = even(original);


console.log("Original array:", original);
console.log("Even numbers:", evens);