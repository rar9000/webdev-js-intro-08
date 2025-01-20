"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallestNumber(array) {
    let smallestNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallestNumber) { 
            smallestNumber = array[i]; 
            }
        }
        smallestNumberElement.innerText = smallestNumber;
    }

function findLargestNumber(array) {
    let largestNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largestNumber) { 
            largestNumber = array[i]; 
            }
        }
        largestNumberElement.innerText = largestNumber;
    }

function findAverage(array) {
    let total = 0
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let average = total / array.length;
    averageNumberElement.innerText = average;
}

function render() {
    findSmallestNumber(myNumbers);
    findLargestNumber(myNumbers);
    findAverage(myNumbers);
}

submissionBtn.addEventListener("click", function () {
    render();
});
    