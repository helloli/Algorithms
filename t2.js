var wiggleMaxLength = function (nums) {
  // [i, j]
  // .        j       .
  //      i       .
  const dp = Array.from({length: nums.length}, () => [1, 1])

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1)
      } else {
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1)
      }
      console.log(i, dp[i])
    }
  }

  return Math.max(...dp.flat())
};

nums = [1, 7, 4, 9, 2, 5]

console.log(wiggleMaxLength(nums))