function biggerNumber(firstNumber,secondNumber) {
    if (typeof firstNumber == "number" && typeof secondNumber == "number") {
        if (firstNumber > secondNumber) {
            console.log(` ${firstNumber} os bigger than ${secondNumber}`);
        } else if (secondNumber > firstNumber) {
            console.log(` ${secondNumber} os bigger than ${firstNumber}`);
        } else {
            console.log(`Both numbers are ${secondNumber}`);
        }
    } else {
        console.log(`error`);
    }
}
biggerNumber(3,5);
biggerNumber(6,3);
biggerNumber(2,2);