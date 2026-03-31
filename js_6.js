const answer = confirm('Should I calculate the square root?');
let result = "";
if (answer === true){
    const number = Number((prompt("Enter the number: ")));
    if (number< 0) {
        result = "The square root of a negative number is not defined."
     } else {
        result = "The square root is " + Math.sqrt(number);
    }
} else {
    result = "Calculation cancelled.";
}


document.getElementById('target').textContent = result;