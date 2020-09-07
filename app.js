const calc = {
    add: (firstNumber, secondNumber) => {
        var bothNumbers = decompose(firstNumber) + decompose(secondNumber)
        if (bothNumbers === "IIII") 
            return "IV"
            
        return compose(bothNumbers)
    }
}

let decompose = (number) => {
    if (number === "IV") {
        return "IIII"
    }
    if (number === "V")
        return "IIIII"

    return number
}

let compose = (number) => {
    return number.replace("IIIII", "V")
}

module.exports = calc