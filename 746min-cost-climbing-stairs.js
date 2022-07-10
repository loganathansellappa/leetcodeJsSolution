/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/submissions/
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if(cost.length > 3) {
       let dp =new Array(cost.length).fill(0)
        dp[0] = cost[0]
        dp[1] = cost[1]
    
    for(let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
    }
    
      return Math.min(dp.at(-1), dp.at(-2))    
    } else {
       return  Math.min(cost.at(-1), cost.at(-2))    
    }   
};