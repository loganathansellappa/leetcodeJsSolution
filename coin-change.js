/**
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 
https://leetcode.com/problems/coin-change/
Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //
    // Given the amount no of ways you can add the coin 
    // You get the amount by taking no coin i.e 0, or yo could achieve with 1 or 2 and so on until the amount which is given in the input
    const possibleAmounts = new Array(amount+1).fill(Infinity)
    // Edge case where we wont take any coins whne the coin is > amount
    // If we get 0 Amount, then we can say we dont take 0
    possibleAmounts[0] = 0
    for (let coin of coins) {
        for(let currentAmount = 0; currentAmount < possibleAmounts.length; currentAmount++) {
            if(coin > currentAmount) {
                // Ideally we can set zero because we cant get our amount at any chance example if the amount we have is 10 and we are looking for change where the coins are > 10
                // 
                // For this problem we dont consider this case as we look for minimum change, we set the change as Infinity which means no possibility if the coins a
            } 
            
            //
            // Coin is lesser so we could make it
            //
            //
            if (coin <= currentAmount) {
                let sum = possibleAmounts[currentAmount - coin] +1 
                possibleAmounts[currentAmount] = Math.min(sum, possibleAmounts[currentAmount])
            }
        }
    }
    return possibleAmounts[possibleAmounts.length-1] === Infinity ? -1 : possibleAmounts[possibleAmounts.length-1]
};