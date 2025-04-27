const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanNumerals = Object.freeze( {
  M: 1000,
 CM: 900,
 D: 500,
 CD: 400,
 C: 100,
 XC: 90,
 L: 50,
 XL: 40,
 X: 10,
 IX: 9,
 V: 5,
 IV: 4,
 I: 1
}); // Object for converting roman numerals and corresponding numbers

const converter = () => {
 let convertedResult = "";
 let inputNumber = parseInt(input.value, 10);// converting input to number
 const existingMessage = result.querySelector("p");
 if (existingMessage) {
   existingMessage.remove();
 } //clears any existing paragraphs in div
 if (input.value === "") {
   const wordElement = document.createElement("p");
   wordElement.textContent = "Please enter a valid number";
   result.appendChild(wordElement);
   result.style.display = "block";
   setTimeout(() => {
     result.style.display = "none"; // set display to none
   },5000); // set timeout to 5 seconds
 }
 else if (inputNumber <= 0) {
   const wordElement = document.createElement("p");
   wordElement.textContent = "Please enter a number greater than or equal to 1";
   result.appendChild(wordElement);
   result.style.display = "block"; 
    setTimeout(() => {
     result.style.display = "none"; // set display to none
   },5000); // set timeout to 5 seconds
 }
 else if (inputNumber > 3999) {
   const wordElement = document.createElement("p");
   wordElement.textContent = "Please enter a number less than or equal to 3999";
   result.appendChild(wordElement);
   result.style.display = "block"; 
    setTimeout(() => {
     result.style.display = "none"; // set display to none
   },5000); // set timeout to 5 seconds
 }
 else {
 for (const [roman, value] of Object.entries(romanNumerals)) {
   while (inputNumber >= value) {
     convertedResult += roman; // Add roman letter into result
     inputNumber -= value; // minus value from inputted number
   } 
 }
 const wordElement = document.createElement("p");
 wordElement.textContent = convertedResult;
 result.appendChild(wordElement);
 result.style.display = "block"; // show result
}
}


button.addEventListener("click", converter);
