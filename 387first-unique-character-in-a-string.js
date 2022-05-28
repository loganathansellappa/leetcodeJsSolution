/**
 * @param {string} s
 * @return {number}
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
 */
var firstUniqChar = function(s) {
    if(s.length === 1) return 0
    if(s.length === 2 && new Set(...s.split('')).length === 2) return 0
	let occurrences = {}
    let firstOccrences = []
    for(let char of s) {
        if (occurrences[char]) {
         let index = firstOccrences.indexOf(char);
         if(index >= 0) firstOccrences.splice(index, 1) 
         occurrences[char]  = occurrences[char] + 1     
        } else {
          firstOccrences.push(char)
          occurrences[char]  = 1    
        }
    }
    return firstOccrences[0] ? s.indexOf(firstOccrences[0]) : -1
};