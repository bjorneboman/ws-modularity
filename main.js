import { convert as convertLength } from "./convertLength.js";
import { convert as convertTemp } from "./convertTemp.js"
import { convert as convertWeight } from "./convertWeight.js";

const buttons = document.querySelectorAll("button")
const inputs = document.querySelectorAll("input")
const divs = document.querySelectorAll("div")

const converts = {
    0: convertLength,
    1: convertTemp,
    2: convertWeight
}

buttons.forEach((button, index) => {
    if(index === 0){
        button.addEventListener("click", () => {
            divs[index].textContent = convertLength(inputs[index].value)
        })
    } else if(index === 1) {
        button.addEventListener("click", () => {
            divs[index].textContent = convertTemp(inputs[index].value)
        })
    } else {
        button.addEventListener("click", () => {
            divs[index].textContent = convertWeight(inputs[index].value).toFixed(2)   
        })  
    }
        
})



console.log(`10 meter = ${convertLength(10)} cm`)
console.log(`37 °C = ${convertTemp(37)}°F`)
console.log(`62 kg = ${convertWeight(62).toFixed(2) } lbs`)