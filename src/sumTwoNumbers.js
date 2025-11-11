/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {


    firstNumber = Number(String(firstNumber).trim().replace(/s+/g, ''));
    secondNumber = Number(String(secondNumber).trim().replace(/s+/g, ''));
   
    let sum = firstNumber + secondNumber;
    return sum;

     
};

