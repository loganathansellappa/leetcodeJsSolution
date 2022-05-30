/**
 * @param {number[]} prices
 * @return {number}
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 // Initialize with first day price
 let minStockPrice = prices[0];  
 // Set 0 profit so we can compare with profits   
 let maxProfit = 0;
 
 for(i = 0; i< prices.length; i++) {
     //
     // For each day update the minStockPrice, 
     // store whichever is lower price
     minStockPrice = Math.min(minStockPrice, prices[i])
      //
     // For each day check the profit
     // currentDayPrice - minStockPrice (this will be always lower if you have a chance of profit) and stoe the maxprofit
     maxProfit = Math.max( prices[i] - minStockPrice, maxProfit)
 }
        return maxProfit
};



//
// Two pointer/sliding window technique
//
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let left = 0
  let right = 1
  let maxProfit = 0
  while(right < prices.length){
      if(prices[left] < prices[right]) {
           maxProfit = Math.max(maxProfit, prices[right]- prices[left])
          right++
       } else {
           left  = right
           right ++
       }
  }
    
    return maxProfit
}
    