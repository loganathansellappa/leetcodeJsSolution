/**
 * @param {string[]} words
 * @return {number}
 * Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

 
https://leetcode.com/problems/maximum-product-of-word-lengths/
Example 1:

Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".
Example 2:

Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4
Explanation: The two words can be "ab", "cd".
Example 3:

Input: words = ["a","aa","aaa","aaaa"]
Output: 0
Explanation: No such pair of words.
 

Constraints:

2 <= words.length <= 1000
1 <= words[i].length <= 1000
words[i] consists only of lowercase English letters.
Accepted
166,013
Submissions

 */
var maxProduct = function (words) {
  getMaxSum = (wordOne, wordTwo) => {
    if (wordOne.length > wordTwo.length)
      [wordOne, wordTwo] = [wordTwo, wordOne];
    let length = wordOne.length * wordTwo.length;
    for (let i = 0; i < wordOne.length; i++) {
      if (wordTwo.includes(wordOne[i])) {
        length = 0;
        break;
      }
    }
    return length;
  };

  let currentMax = 0;
  let totalMax = 0;
  for (i = 0; i < words.length - 2; i++) {
    for (j = i + 1; j < words.length; j++) {
      totalMax = Math.max(getMaxSum(words[i], words[j]), totalMax);
    }
  }
  return totalMax;
};
