// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
 

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    triplets= []
    uniq = new Set()
    occurences = {}
    nums.sort()
    for(i = 0; i < nums.length; i++) { occurences[`${nums[i]}`] = i}
    
    for (i=0; i< nums.length; i++) {
      for(j=i+1; j < nums.length; j++){
          currentTarget = nums[i]+nums[j] === 0 ? 0 :  -(nums[i]+nums[j]) 
          k = occurences[`${currentTarget}`]
          if(k && k > j && k > i) {
              if(!uniq.has(`${nums[i]}:${nums[j]}:${currentTarget}`)) {
                  uniq.add(`${nums[i]}:${nums[j]}:${currentTarget}`)
                  triplets.push([nums[i], nums[j], currentTarget])
              }
          }
      }
    }
    return triplets
};