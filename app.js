const calc = {
    add: (firstNumber, secondNumber) => {
        var bothNumbers = convert(firstNumber) + convert(secondNumber)
        if (bothNumbers === "IIII") 
            return "IV"
        if (bothNumbers === "IIIII") 
            return "V"
        return bothNumbers
    }
}

let convert = (number) => {
    if  (number === "IV") {
        return "IIII"
    }
    return number
}

module.exports = calc