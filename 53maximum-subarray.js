Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

 /**
 * @param {number[]} nums
 * @return {number}
 */
//
//
// Kaden's Algorithm
// return nums[0]
// 
//
//
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0]
    
    let maxSum = nums[0]
    let currentSum = nums[0]
    
    for(i=1; i<nums.length; i++) {
        //
        // Always pick the maximum number between currentSum and currentNumber
        //
        currentSum = Math.max(nums[i], currentSum+nums[i])
        //
        // Set MaxSum when current max is > MaxSum
        //
        if(currentSum > maxSum) maxSum = currentSum
    }
    return maxSum
};