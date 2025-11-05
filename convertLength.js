export function convert(num, units){
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