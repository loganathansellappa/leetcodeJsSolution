/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 https://leetcode.com/problems/combination-sum/

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
 

Constraints:

1 <= candidates.length <= 30
1 <= candidates[i] <= 200
All elements of candidates are distinct.
1 <= target <= 500


 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let dp = [...new Array(target + 1).fill([])];
  for (i = 0; i < candidates.length; i++) {
    for (j = 0; j < target + 1; j++) {
      if (candidates[i] > j) continue;
      if (candidates[i] === j) {
        if (dp[j].length > 0) {
          dp[j] = [...dp[j], [candidates[i]]];
        } else {
          dp[j] = [[candidates[i]]];
        }
      } else {
        dp[j - candidates[i]].forEach((a) => {
          if (a.length > 0) {
            if (dp[j].length > 0) {
              dp[j] = [...dp[j], [candidates[i], ...a.flat()]];
            } else {
              dp[j] = [[candidates[i], ...a.flat()]];
            }
          }
        });
      }
    }
  }
  return dp[target];
};