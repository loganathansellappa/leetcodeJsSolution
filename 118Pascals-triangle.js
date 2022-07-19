/**
 * @param {number} numRows
 * @return {number[][]}
 * https://leetcode.com/problems/pascals-triangle/
 */
var generate = function(numRows) {
   let result = []
    for(let i=0; i < numRows; i++) {
        result[i] = new Array(i+1).fill(1)
        if(result[i-1] !== undefined) {
         result[i].forEach((e, si) => {
       			if(result[i-1][si-1] !== undefined && result[i-1][si] !== undefined) {
              result[i][si] = result[i-1][si-1] + result[i-1][si]
            }
         })
       }
    }
    return result
};