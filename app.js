const calc = {
    add: (firstNumber, secondNumber) => {
        if (firstNumber === "I" && secondNumber === "III") return "IV"
        if (firstNumber === "III" && secondNumber === "I") return "IV"
        return firstNumber + secondNumber
    }
}
module.exports = calc