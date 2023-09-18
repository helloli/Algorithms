/**
 * 动态规划
 * 1. 动态规划对问题进行递归分解，但是子问题是相互依赖的，特点是包含重叠子问题，拥有最优子结构，无后效性。原问题的最优解是由子问题的最优解构建而来。
 * 2. 解决步骤：
 *    2.0 如果需要，设置出口
 *    2.1 初始化 DP 表
 *    2.2 初始化最小问题的解
 *    2.3 状态转移方程
 *    2.4 返回结果
 */

// const cache = []

// function fibonacci(num) {
//   // exit
//   if (num === 1) {
//     return 1
//   }
//   if (num == 2) {
//     return 2
//   }

//   cache[num] = cache[num - 1] || ibonacci(num - 1) + cache[num - 2] || fibonacci(num - 2)
//   // recursion
//   return cache[num]
// }

// l2 l1
//       

// function fibonacci(num) {
//   let result = 0;
//   let resultLeft2 = 1;
//   let resultLeft1 = 2;

//   for (let i = 2; i < num; i ++) {
//     result = resultLeft2 + resultLeft1;
//     resultLeft2 = resultLeft1;
//     resultLeft1 = result;
//   }

//   return result
// }

function fibonacci(num) {
  // exit
  if (num === 1) return 1;
  if (num === 2) return 2;

  // init dp table
  const dp = []

  // init the solution of minimal problem
  dp[1] = 1
  dp[2] = 2

  // dp transfer function
  for (let i = 3; i <= num; i ++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }

  return dp[num]
}
console.log(fibonacci(5)) 

