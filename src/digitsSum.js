/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {

  let absolute = Math.abs(n);
  let sum = 0;

  if (absolute === 0) 
    return 0;
  
  while (absolute > 0) {
    let digit = absolute % 10;
    sum = sum + digit;
    absolute = Math.floor(absolute / 10);
  }

  return sum;

};

