const number = Number(prompt("Enter an integer:"));
let isPrime = true;

if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    document.getElementById("target").textContent = number + " is a prime number.";
} else {
    document.getElementById("target").textContent = number + " is NOT a prime number.";
}