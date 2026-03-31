    let number_1 = parseInt(prompt('Enter an integer 1:'));
    let number_2 = parseInt(prompt('Enter an integer 2:'));
    let number_3 = parseInt(prompt('Enter an integer 3:'));

    summa = number_1 + number_2 + number_3
    product_of_numbers = number_1 * number_2 * number_3
    average = summa / 3
        document.getElementById("target").innerHTML =
        "Summa: " + summa + "<br>" +
        "Product: " + product_of_numbers + "<br>" +
        "Average: " + average;
