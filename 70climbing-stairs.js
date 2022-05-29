/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  // Base cases
  //
  //
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  // When n is 1, you can go one step to reach
  // This will become your previous step when you're in second stair
  let waysToReachFirstStep = 1;
  // When n is 2, you can go by taking two ONE step or one TWO step to reach, so you have 2 ways to reach
  // This is your current stair when you're in second stair
  let waysToReachSecondtStep = waysToReachFirstStep + 1;

  for (i = 3; i <= n; i++) {
    // When climibing up update current(waysToReachSecondtStep) and previous stairs(waysToReachFirstStep) to latest value
    [waysToReachSecondtStep, waysToReachFirstStep] = [
      waysToReachFirstStep + waysToReachSecondtStep,
      waysToReachSecondtStep,
    ];
  }

  return waysToReachSecondtStep;
};