/* JavaScript Starter Code */

let numbers = document.getElementById('initialNumbers');
let result = document.getElementById('permutedNumbers');
let btn = document.getElementById('btnPermute');
let resultDiv = document.getElementById('resultDiv');
let numArray = [];

let howmany = 0;
let permute = [];

function randomPermuteMe(numArray) {
    // ToDo
    result.innerHTML = "";
    numArray.sort(function (a, b) { return 0.5 - Math.random() });

    console.log(numArray);

    for (let i = 0; i < howmany; i++) {

        if (i == 0) {
            result.innerHTML += numArray[i];
        } else {
            result.innerHTML += ", " + numArray[i];
        }
    }

}
window.onload = function () {
    // ToDo
    while (howmany == 0) {
        howmany = prompt("How many numbers?", "0");
    }

    for (let i = 0; i < howmany; i++) {
        numArray[i] = Math.floor(Math.random() * 100) + 1;

        if (i == 0) {
            numbers.innerHTML += numArray[i];
        } else {
            numbers.innerHTML += ", " + numArray[i];
        }
    }

}
btn.onclick = function () {

    randomPermuteMe(numArray);
}