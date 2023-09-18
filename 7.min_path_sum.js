/**
 * min path sum
 *    0 1 2 3
 * 
 *  0  1 3 1 5
 *       ↑
 *  1  2←2 4 2
 *  2  5 3 2 1
 *  3  4 3 5 2
 * 
 * dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j]
 */

function min_path_sum(grid) {
  // init dp table
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({length: m}, () => Array.from({length: n}))

  // init minimal solution
  dp[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0] 
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = grid[0][i] + dp[0][i -1]
  }

  // dp transfer
  for (let i = 1; i < m; i ++) {
    for (let j = 1; j < n; j ++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  console.log(dp)
  return dp[m - 1][n - 1]
}

console.log(min_path_sum([
  [1, 3, 1, 5],
  [2, 2, 4, 2],
  [5, 3, 2, 1],
  [4, 3, 5, 2]
]))