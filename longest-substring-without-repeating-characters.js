/**
 * @param {string} s
 * @return {number}
 * Given a string s, find the length of the longest substring without repeating characters.

 https://leetcode.com/problems/longest-substring-without-repeating-characters/

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1
    if (s.length === 0) return 0

    let currentSubstring = []
    let maxSubstring = []
    let end = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = end; j < s.length; j++) {
            if (!currentSubstring.includes(s[j])) {
                currentSubstring.push(s[j])
            } else {
               if (currentSubstring.length > maxSubstring.length) {
                 maxSubstring = currentSubstring
               }
                currentSubstring = currentSubstring.slice(1)
                end = j
                break;
            }
           
        }
    }
    return maxSubstring.length
};