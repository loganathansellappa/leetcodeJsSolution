/**https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 28. Implement strStr()
Easy

4209

3704

Add to List

Share
Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */
var strStr = function(haystack, needle) {
    if(!needle.length) return 0
    let left = 0
    while (left <= (haystack.length - needle.length)) {
      if (haystack.slice(left, needle.length + left) === needle) return left
      left++;
    }
    return -1
};