// Create 3 different variables with all charactes possibles to create a passwords object✅
// letters/symbols/numbers✅
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

//Select button with class .gen-pass✅

const button = document.querySelector(".gen-pass");

//add an onclick event to .gen-password button✅
//when I click the generator password button I have to trigger a function✅
//Generate password function should have an empty variable where the random combination will be pushed to.✅
//The function should grab 4 characters randomly, from each variable(letters/symbols/numbers)✅
button.addEventListener("click", (e) => {
  let password = [];

  e.preventDefault();
  
  for (let i = 0; i < 4; i++) {
    let randomLetters = letters[Math.floor(Math.random() * letters.length)];
    let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
    let randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];

    password.push(randomLetters, randomNumbers, randomSymbols);
    password.join();
  }

  console.log(password);
});



//Grab each of the resulting variables with the 4 characters and join them in the empty variable created in the function.✅

//start by selecting the first input element with the .first-password class
// display into the input already selected by the class mentioned above the password pushed into the function's variable.
