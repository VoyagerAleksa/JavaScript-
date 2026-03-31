function getRandomHouse() {
    return Math.floor(Math.random() * 4) + 1;
}
const name = prompt('Enter your name:');
const number = getRandomHouse();
let house = '';

if (number === 1) {
    house = 'Gryffindor';
} else if (number === 2) {
    house = 'Slytherin';
} else if (number === 3) {
    house = 'Hufflepuff';
} else {
    house = 'Ravenclaw';
}

document.getElementById('target').textContent = `${name},  ${house}!`;