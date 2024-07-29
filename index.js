// Conversion constants
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

const buttonEl = document.getElementById("convertButton");
const inputEl = document.getElementById("inputValue");
const metersEl = document.getElementById("meters");
const litersEl = document.getElementById("liters");
const kilosEl = document.getElementById("kilos");

// Event listener for button click
buttonEl.addEventListener("click", function() {
    // Convert input value to number
    const inputValue = parseFloat(inputEl.value);

    // Check if inputValue is a valid number
    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    // Conversion calculations
    const feet = inputValue * meterToFeet;
    const meters = inputValue / meterToFeet;

    const gallon = inputValue * literToGallon;
    const liters = inputValue / literToGallon;

    const pound = inputValue * kilogramToPound;
    const kilos = inputValue / kilogramToPound;

    // Update the HTML elements
    metersEl.innerHTML = `${inputValue} meters = ${feet.toFixed(2)} feet | ${inputValue} feet = ${meters.toFixed(2)} meters`;
    
    litersEl.innerHTML = `${inputValue} liters = ${gallon.toFixed(2)} gallons | ${inputValue} gallons = ${liters.toFixed(2)} liters`;
    
    kilosEl.innerHTML = `${inputValue} kilograms = ${pound.toFixed(2)} pounds | ${inputValue} pounds = ${kilos.toFixed(2)} kilograms`;

});
