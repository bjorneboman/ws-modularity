import { convert as convertLength } from "./convertLength.js";
import { convert as convertTemp } from "./convertTemp.js"
import { convert as convertWeight } from "./convertWeight.js";

const buttons = document.querySelectorAll("button")
const inputs = document.querySelectorAll("input")
const divs = document.querySelectorAll("div")
const lengthUnitFrom = document.querySelector("#length-unit-from")
const lengthUnitTo = document.querySelector("#length-unit-to")
const units = {
    0: {
        from: lengthUnitFrom,
        to: lengthUnitTo
    }
}

const converts = {
    0: convertLength,
    1: convertTemp,
    2: convertWeight
}

buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            divs[index].textContent = converts[index](inputs[index].value, units[index])
        })
})

// buttons.forEach((button, index) => {
//     if(index === 0){
//         button.addEventListener("click", () => {
//             divs[index].textContent = convertLength(inputs[index].value)
//         })
//     } else if(index === 1) {
//         button.addEventListener("click", () => {
//             divs[index].textContent = convertTemp(inputs[index].value)
//         })
//     } else {
//         button.addEventListener("click", () => {
//             divs[index].textContent = convertWeight(inputs[index].value).toFixed(2)   
//         })  
//     }       
// })
