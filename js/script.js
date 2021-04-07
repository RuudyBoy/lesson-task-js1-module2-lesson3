// Question 1

const btn = document.querySelector(".btn");

function functionA() {
    
    console.log("I'm a button");
}

   
btn.addEventListener("click", functionA);

// Question 2

const input = document.querySelector("input");
const countButton = document.querySelector("form button");
const countOutput = document.querySelector("b.count");

function countCharacters() {
    const characterCount = input.value.trim().length;
    countOutput.innerHTML = characterCount;
}

countButton.addEventListener("click", countCharacters);

