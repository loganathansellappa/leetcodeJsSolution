// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


var longestCommonPrefix = function (strs) {
  
  const emptyIndex = strs.findIndex((item) => item === "");
  if (strs.length === 0 || emptyIndex !== -1) return "";
  if (strs.length === 1) return strs[0];
  
  let commonPrefix = "";  
  let smallerArray = 0;
  let currentLetter = new Set();
    
  strs.forEach((word) => {  smallerArray = Math.max(smallerArray, word.length) });

  loop1: for (i = 0; i < smallerArray; i++) {
    let currentPrefix = "";
    loop2: for (j = 0; j < strs.length; j++) {
      word = strs[j];
      currentLetter.add(word[i]);
      if (j === strs.length - 1) {
        if (currentLetter.size === 1) {
          commonPrefix += word[i];
          currentLetter.clear();
        } else {
          currentLetter.clear();
          break loop1;
        }
      }
    }
  }
  return commonPrefix;
};