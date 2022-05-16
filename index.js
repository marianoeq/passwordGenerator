const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const button = document.querySelector(".gen-pass");

const input1 = document.querySelector(".first-password");
const input2 = document.querySelector(".second-password");
const input3 = document.querySelector(".third-password");
const input4 = document.querySelector(".fourth-password");

const slider = document.querySelector("#input-range");
const output = document.querySelector("#output-el");



function passwordLength(){
  output.innerHTML = `Number of characters:  ${slider.value}`;  
  console.log(slider.value);

  return Array(4)
    .fill(0)
    .flatMap(() => [
      letters[Math.floor(Math.random() * letters.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ])
    .join("").substring(0,slider.value)
};

button.addEventListener("click", (e) => {
  e.preventDefault();

  input1.value = passwordLength();
  input2.value = passwordLength();
  input3.value = passwordLength();
  input4.value = passwordLength();
});


function copyPassword(id){
  if(id === "first-Icon"){
    navigator.clipboard
    .writeText(input1.value)
    .then(function () {
      alert(`You copied this ( ${input1.value} ) password`); // success
    })
  }else if (id === "sec-Icon"){
    navigator.clipboard
    .writeText(input2.value)
    .then(function () {
      alert(`You copied this ( ${input2.value} ) password`); // success
    })
  }else if(id === "third-Icon"){
    navigator.clipboard
    .writeText(input3.value)
    .then(function () {
      alert(`You copied this ( ${input3.value} ) password`); // success
    })
  }else{
    navigator.clipboard
    .writeText(input4.value)
    .then(function () {
      alert(`You copied this ( ${input4.value} ) password`); // success
    })
  }
}



// Create 3 different variables with all charactes possibles to create a passwords object✅
// letters/symbols/numbers✅
//Select button with class .gen-pass✅
//add an onclick event to .gen-password button✅
//when I click the generator password button I have to trigger a function✅
//Generate password function should have an empty variable where the random combination will be pushed to.✅
//The function should grab 4 characters randomly, from each variable(letters/symbols/numbers)✅
//Grab each of the resulting variables with the 4 characters and join them in the empty variable created in the function.✅
//selectthe first input element with the .first-password class✅
// display into the input already selected by the class mentioned above the first password generated ✅
