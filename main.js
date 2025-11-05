import { convert as convertLength } from "./convertLength.js";
import { convert as convertTemp } from "./convertTemp.js"
import { convert as convertWeight } from "./convertWeight.js";

console.log(`10 meter = ${convertLength(10)} cm`)
console.log(`37 °C = ${convertTemp(37)}°F`)
console.log(`62 kg = ${convertWeight(62).toFixed(2) } lbs`)