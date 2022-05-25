// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// Easy

// 13168

// 588

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openBrackets = ['(', '{', '[']
    if(s.length %2 !== 0 || openBrackets.includes(s[s.length-1])) {
        return false
    } else {
      let stack = []
        for(i=0; i< s.length; i++) {
            if(['(', '[', '{'].includes(s[i])) {
               stack.push(s[i])
           } else if (!stack.length) {  
             return false;
            } else if (s[i] === ')' && stack[stack.length -1] === '(') {
               stack.pop()
            } else if(s[i] === ']' && stack[stack.length -1] === '[') {
                stack.pop()
            } else if(s[i] === '}' && stack[stack.length -1] === '{') {
                stack.pop()
            } else {
                return false
            }
        }
        return !stack.length
    }
};
