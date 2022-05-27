/**
 * @param {number[]} nums
 * @return {number[]}
 */https://leetcode.com/problems/product-of-array-except-self/
var productExceptSelf = function(nums) {

    // Set default value 1, as you wont be having any elements in  left side when i = 0
    // From array first element to last element
    // ----------------------------->
    // [1*1=1, 1*2= 2, 3*2 = 6, 4*6=24]
    //
    let leftCummulativeMultiplcation = 1
    // Fill product value from right
    // Set default value 1, as you wont be having any elements in right side when i = nums.length-1
    // Right multiplication is multiplication starts from Right side which is from last element in array to first element
    // From array last element to first element
    // <-----------------------------                              
    // [1*24=24, 2*12= 24, 3*4 = 12, 4*1=4]
    let rightCummulativeMultiplication = 1
    //
    // Product of leftCummulativeMultiplcation and rightCummulativeMultiplication
    //  Will give correct product result
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            leftCummulativeMultiplcation = nums[i]
        } else {
            leftCummulativeMultiplcation = leftCummulativeMultiplcation * nums[i]
        }

        result.push(leftCummulativeMultiplcation)
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        //
        // Result array holds the value of leftcmulative product of the numbers
        //
        if (i === 0) {
            // When i = 0, we wont be havng any leftside product so we just use right side cumulative product value
            result[i] = rightCummulativeMultiplication
        } else if (i === nums.length - 1) {
            // When i = last element, we wont be havng any rightside product so we just use left side cumulative product value, which is i-1
            result[i] = result[i - 1]
        } else {
            //
            // For all other cases
            // for ith position leftside product is product of all elements before i and products of the element from right side i = i-1 * i+1 
            // result = leftsideproduct value * rightside product value
            result[i] = result[i - 1] * rightCummulativeMultiplication
        }
        //
        // Right side cummulative product
        //
        rightCummulativeMultiplication = rightCummulativeMultiplication * nums[i]
    }
    return result;
};