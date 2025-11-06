export function convertLength(num, units){
    const {from, to} = units
    if(from.value !== to.value) {
        if(from.value === "m") {
            return num * 100
        } else {
            return num / 100
        }
    } else {
        return num
    }
}

export function convertTemp(num, units){
    const {from, to} = units
    if(from.value !== to.value) {
        if(from.value === "C") {
            return num * 1.8 + 32
        } else {
            return (num - 32) / 1.8
        }
    } else {
        return num
    }
}

export function convertWeight(num, units){
    const {from, to} = units
    if(from.value !== to.value) {
        if(from.value === "kg") {
            return num * 2.20462
        } else {
            return num / 2.20462
        }
    } else {
        return num
    }
}