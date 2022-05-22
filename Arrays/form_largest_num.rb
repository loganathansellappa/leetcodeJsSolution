#  https://leetcode.com/problems/largest-number/
#Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
# Since the result may be very large, so you need to return a string instead of an integer.
# Example 1:

# Input: nums = [10,2]
# Output: "210"
# Example 2:

# Input: nums = [3,30,34,5,9]
# Output: "9534330"
 

# Constraints:

# 1 <= nums.length <= 100
# 0 <= nums[i] <= 109



def largest_number(nums)
	if(nums.length === 1 || (nums.uniq.length === 1 && nums[0] === 0))
		nums[0].to_s
	else
		nums.sort {|a,b| b.to_s+a.to_s <=> a.to_s+b.to_s}.join()
	end	
end

nums = [3,30,34,5,9]
largest_number(nums)