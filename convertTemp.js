export function convert(num, units){
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