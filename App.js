let holdNumber = Math.floor(Math.random() * 101);
let takenNumber = document.getElementById('number');
let magicHat = document.getElementById('hat');
let result = document.getElementById('r_number');
let attempNumber = document.getElementById('attemp');
let counter = 0;
let buttonCheck = document.getElementById('c_button');
let upper = document.getElementById('upper');


buttonCheck.addEventListener("click", () => {

    if (holdNumber > Number(takenNumber.value)) {
        upper.innerText = `! UP ! Please choose between ${takenNumber.value} - 100 `;
        counter++;

    } else if (holdNumber < Number(takenNumber.value)) {
        upper.innerText = `! DOWN ! Please choose between 0 - ${takenNumber.value} `;
        counter++;

    } else if (holdNumber == Number(takenNumber.value)) {
        upper.style.display = 'none';
        counter++;
        magicHat.style.display = 'block';
        attempNumber.innerHTML = 'Your attempt number is : ' + counter;
        result.innerHTML = 'Number was :' + holdNumber;
    }

});