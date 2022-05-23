# Given a string s, return the longest palindromic substring in s.

 

# Example 1:

# Input: s = "babad"
# Output: "bab"
# Explanation: "aba" is also a valid answer.
# Example 2:

# Input: s = "cbbd"
# Output: "bb"
 

# Constraints:

# 1 <= s.length <= 1000

# @param {String} s
# @return {String}
def find_palindrome(left, right, str)
	 while (left >= 0 && right < str.length) 
	   break if(str[left] != str[right]) 
   		left = left -1
   		right = right +1
  	end
 	 return str.slice(left+1...right)
end

def longest_palindrome(s)
  longestSubstring = ""
  for i in 0...s.size do 
  	odd = find_palindrome(i-1, i+1, s)
  	even = find_palindrome(i-1, i, s)
  	currentSubstring = odd.size > even.size ? odd : even
  	if(currentSubstring.size > longestSubstring.size) 
    	longestSubstring = currentSubstring 
  	end	
  end
  return longestSubstring
end