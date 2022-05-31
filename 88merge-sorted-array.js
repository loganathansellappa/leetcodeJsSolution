/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

   let num1Pointer = m - 1
   let num2Pointer = n - 1
   let resutArrayPointer = (m + n) - 1 // We know the result will be m+n
   
   //
   // resutArrayPointer = 0 means either m or n = 0 so we just update/return nums1 as it is
   // 
   if(resutArrayPointer === 0) {
       nums1[0] = nums2[0] && nums2[0] > 0 ? nums2[0] : nums1[0]
   }
       
   // While loops starts from last index position of both arrays
   //
   while(resutArrayPointer >= 0) {
        // num1Pointer
        // num2Pointer
       //
       // Last element in num1 is greater than move it to the last poision of result array.
       //
       // Result array is nums1 so we update the nums1
       
        //
       // when num2Pointer < 0 we already pushed everything to nums1 so ust update nums1
        if (nums1[num1Pointer] > nums2[num2Pointer] || (num1Pointer >=0 && num2Pointer < 0)) {
             nums1[resutArrayPointer] = nums1[num1Pointer]
            // Now we have moved the greatest element amonth the arrays in to the last position
            // move the nums1 pointer because there might be a chance that nums1 element greater than the rest of the elments of nums 2 arr so we just move num1Pointer
              num1Pointer --
         } else {
           
             //
             // nums2 last element is bigger so push the nums2 last element in to result array last index 
             //
             nums1[resutArrayPointer] = nums2[num2Pointer]
             // move the nums2 pointer because there might be a chance that nums2 element greater than the rest of the element of nums1 arr so we just move num2Pointer
             num2Pointer --
         }
       
         // At this point we have pushed the element either from nums1 or nums2 to result array
         // so decrement the result array index (result array index is the position where we are gonna push the next possible element)
        resutArrayPointer --
   }
};