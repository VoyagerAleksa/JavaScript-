const year = Number(prompt('Enter the year:'));
let direction_of_the_year =  "";
if (year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0) ) {
    direction_of_the_year = "leap year";
} else {
    direction_of_the_year = "common year";
}
document.getElementById('target').textContent = `${year}, ${direction_of_the_year}!`;