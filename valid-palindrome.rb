# https://leetcode.com/problems/valid-palindrome/
# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

 

# Example 1:

# Input: s = "A man, a plan, a canal: Panama"
# Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.
# Example 2:

# Input: s = "race a car"
# Output: false
# Explanation: "raceacar" is not a palindrome.
# Example 3:

# Input: s = " "
# Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.
 

# Constraints:

# 1 <= s.length <= 2 * 105
# s consists only of printable ASCII characters.
# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    s = s.gsub(/([^A-Za-z0-9])/,'').downcase.split('')
    if(s.length >2)
        @left = s.slice!(0,s.length/2)
        for i in 0...@left.size do
            if(@left[i] != s[s.size-i-1]) 
              return false
            end    
        end
        return true
    elsif(s.uniq.length.eql?(1))
        return true
    else
        return s[0] == s[s.size-1]
    end
    return true
end