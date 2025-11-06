export function convert(num, units){
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