//https://leetcode.com/problems/longest-palindromic-substring/
// Given a string s, return the longest palindromic substring in s.
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


const findPalindrome = (left, right, string) => {
  while(left >= 0 && right < string.length) {
   if(string[left] !== string[right]) {
     break;
   }
   left --;
   right ++;
  }
  return string.slice(left+1,right)
}


var longestPalindrome = function(s) { 
  let largestPalindrome = '';
  for(let i=0; i < s.length; i++) {
    odd = findPalindrome(i-1,i+1,s)
    even = findPalindrome(i-1,i,s)
    currentMax = (odd.length > even.length ? odd : even) 
    if(currentMax.length > largestPalindrome.length) {
      largestPalindrome = currentMax 
    }
  }
    return largestPalindrome
}