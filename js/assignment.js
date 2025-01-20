"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnTheRemainder(num1, num2) {
    return num1 % num2;
}

function checkIfEven(num) {
    return num % 2 === 0;
}

function getTheFourthElement(arr) {
    return arr[3];
}

// Render answers to the page
remainderElement.textContent = returnTheRemainder(10, 3);  // Example: Display remainder of 10 divided by 3
checkIfEvenElement.textContent = checkIfEven(4);  // Example: Check if 4 is even
lostNumbersElement.textContent = getTheFourthElement(lostNumbers);  // Get the 4th element from the array
