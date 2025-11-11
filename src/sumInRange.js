/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
 
if (typeof start === 'string') {Number.start};
if (typeof end === 'string') {Number.end};

    let num = Math.min(start,end);
    let nom = Math.max(start,end);
    
  let i = num;
  let sum = 0;

  while (i <= nom) { 
    sum = sum + i;
    i = i + 1; };

  return sum;
    
};


