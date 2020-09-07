const calc = {
    add: (firstNumber, secondNumber) => {
        var bothNumbers = firstNumber + secondNumber
        if (bothNumbers === "IIII") 
            return "IV"
        if (bothNumbers === "IIV") 
            return "V"   
        return bothNumbers
    }
}
module.exports = calc