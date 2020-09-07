const calc = {
    add: (firstNumber, secondNumber) => {
        var bothNumbers = decompose(firstNumber) + decompose(secondNumber)
        
        return compose(bothNumbers)
    }
}

let decompose = (number) => {
    if (number === "IV")
        return "IIII"
    if (number === "V")
        return "IIIII"

    return number
}

let compose = (number) => {
    return number.replace("IIIII", "V").replace("IIII", "IV")
}

module.exports = calc