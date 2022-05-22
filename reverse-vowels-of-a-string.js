// https://leetcode.com/problems/reverse-vowels-of-a-string
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const str = s.split('');
    const vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let left = 0; 
    let right = str.length - 1;
    
    while(left < right) {
        while(left < right && !vowels.includes(str[left])) {
            left++;
        }
        
        while(left < right && !vowels.includes(str[right])) {
            right--;
        }
       [str[left], str[right]] = [str[right], str[left]]
       left++;
       right--;
    }
    return str.join('');
};