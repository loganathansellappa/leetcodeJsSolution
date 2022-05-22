# https://leetcode.com/problems/reverse-vowels-of-a-string/
# 345. Reverse Vowels of a String
# Easy

# Add to List

# Share
# Given a string s, reverse only all the vowels in the string and return it.

# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

# Example 1:

# Input: s = "hello"
# Output: "holle"
# Example 2:

# Input: s = "leetcode"
# Output: "leotcede"
 

# Constraints:

# 1 <= s.length <= 3 * 105
# s consist of printable ASCII characters.

def reverse_vowels(s)
  vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  str = s.split('')
  left = 0
  right = str.length - 1

  while(left < right) 
    while(left < right && !vowels.include?(str[left]))
     	left += 1	
    end	

    while(left < right && !vowels.include?(str[right]))
     	right -= 1	
    end	

    str[left], str[right] = str[right], str[left]
    left += 1	
    right -= 1	
  end	

  return str.join('')
end

reverse_vowels("leetcode")

