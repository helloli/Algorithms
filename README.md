# Algorithms

## 一、three sum 三数相加问题

https://leetcode.com/problems/3sum/

### 问题描述

在一个由 number 组成的数组中，找到所有的 3 个数组成的数组，使得这三个数字的和等于给定的数字

### 解答

1. 考虑到时间复杂度肯定大于等于 O(n²) 可以先用 sort 排序，从左到右依次增大
2. 从左到右遍历数组，设置三个指针，当前index指针，一个从当前 index 开始往右的指针，一个从最右往左的指针，这三个值的和如果等于 target 则记录下来，如果大于则右边指针向左移动，小于则左侧指针向右移动，如果移动过程中发现值相等则直接继续移动
3. 遍历的出口是当前值大于等于 0

### 代码
```javascript
function threeSum(nums) {
  const results = []
  if (nums.length < 3) return results;
  nums = nums.sort((a, b) => a - b);
  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return results;
}
```

## 二、trapping rain water 雨水收集问题

https://leetcode.com/problems/trapping-rain-water/
https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/rain-terraces

### 问题描述

给定一个 number 组成的数组，值代表箱子的高度，下雨后，这些箱子中的间隙一共能收集到多少雨水

### 解答

暴力破解：

1. 遍历数组，找当前 index 往左的最大值和当前 index 往右的最大值
2. 这两个值中取小的那个减去当前 index 的箱子高度就是当前位置能收集到雨水的高度
3. 最后求和

暴力破解的优化：

1. 从左向右遍历数组，保存当前位置和左侧最高值中的较大值 max1
2. 从右向左遍历数组，保存当前位置和右侧最高值中的较大值 max2
3. 从左往右遍历数组，取 max1 和 max2 中的较小值减去当前值得到当前位置可以积水的值，最后求和

几何解法:

1. 从左往右遍历，对比当前值和最大值(初始为0)，把最大值相加得到 leftTotal，同时计算出箱子的总高度 total
2. 从右往左遍历，重复1的步骤，得到 rightTotal
3. 发现这两个部分阴影部分的面积就是积水的面积，计算方法为  bigArea = leftTopValue * 数组长度; result = bigArea - (bigArea-leftTotal) - (bigArea-rightTotal) - total

## 三、Climbing Stairs 爬楼梯问题(斐波那契数列)

### 问题描述

楼梯可以一次爬一步，一次爬两步，问怕 N 阶楼梯一共有多少种爬楼梯的方案

### 解法

带缓存的斐波那契数列

## 四、maximum-subarray 最大子序列

https://leetcode.com/problems/maximum-subarray/
https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/maximum-subarray

### 问题描述

给一个 number 数组，求一个子序列，使得和最大

### 解法

```javascript
var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i ++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums)
};
```

### 变形1：最长不重复子串

```javascript
var lengthOfLongestSubstring = function(s) {
  if (s === null) {
    return 0;
  }
  if (s.length <= 1) {
    return s.length;
  }
  
  let longest = 1;
  let i = 0;
  let j = 1;
	
  while (j < s.length) {
    let p = s.substring(i, j).indexOf(s.charAt(j));
    if (p > -1) {
      i += p + 1;
    } else {
      longest = Math.max(longest, j - i + 1);
    }
        
    j ++;
  }
  
  return longest;
};
```

### 变形2：所有不重复子串

```javascript
function findSubstring(s) {
  let i = 0;
  let j = 1;
  let result = 0;

  while (j < s.length) {
    const p = s.substring(i, j).indexOf(s.charAt(j));
    result += (j - i);

    if (p > -1) {
      i = p + 1;
    }

    j += 1;
  }

  return result + j - i;
}
```

## 五、Merge Sorted Array 排序数组合并

https://leetcode.com/problems/merge-sorted-array/
### 问题描述

两个排序好了的数组长度分别为 m 和 n，合并成一个排序好的了数组，要求不返回新的数组，直接修改第一个数组的值

### 解法

1. 设置两个指针 i, j 分别指向两个数组的末尾
2. 设置一个指针 p 放在第一个数组的 m+n 处
3. 比较 i 和 j 处的值的大小，把大的放在 p 处，把 p 左移，i 和 j 处数字比较大的那个指针左移
4. 直到 i 或者 j 小于 0 时作为出口处理q

```javascript

```

## 六、spiral-matrix 螺旋矩阵

https://leetcode.com/problems/spiral-matrix/

### 问题描述

二维数组表示的矩阵，顺时针遍历出它的值到一个数组里

### 解法

1. 

## 七、快速排序

## 八、最长递增子数组
https://leetcode.com/problems/longest-increasing-subsequence/description/
设置一个 DP 数组，每个字段表示如果为这个长度的时候，使得最长递增值为当前数组下标的子数组的最后一个值为最小的值。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const dp = [nums[0]];

    for (let i = 1, l = nums.length; i < l; i ++) {
        if (nums[i] > dp[dp.length - 1]) {
            dp.push(nums[i]);
        } else {
            const position = bs(dp, nums[i]);
            dp[position] = nums[i];
        }
    }

    return dp.length;
};

var bs = function (arr, num) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let mid = Math.floor((i + j) / 2);
        if (arr[mid] >= num) {
            j = mid;
        } else {
            i = mid + 1;
        }
    }
    return i;
}
```

## 九、最长递增子数组
https://leetcode.com/problems/maximum-length-of-pair-chain/description/
先把数组变成有序数组。设置一个一维数组的 DP，双指针遍历，一个指针 i 遍历数组，一个指针 j 从头开始遍历到当前位置，如果 j 位置的最大值小于 i 位置的最小值，那就把 dp[i] 的值设置成 dp[i] 和 dp[j]+1 的较大那个值。

```javascript
/**
 * @param {number[][]} pairs
 * @return {number}
 */
/**
    [[1,2],[1,3],[3,4],[4,5],[5,6],[6,8]]
                  ↑  
    dp:
        0   1   2   3   4   5
        1   1   3   1   1   1

 */
var findLongestChain = function(pairs) {
    // better to be sorted
    const sortedPairs = pairs.sort((a, b) => a[0] - b[0]);

    // dp init
    const dp = new Array(sortedPairs.length).fill(1);

    // transfer equation
    for (let i = 1; i < sortedPairs.length; i ++) {
        for (let j = 0; j < i; j ++) {
            if (sortedPairs[j][1] < sortedPairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return Math.max(...dp);
};
```

## 十、最长摆动子序列
https://leetcode.com/problems/wiggle-subsequence/description/
就是子序列里的值大小交替

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    // [i, j]
    // .        j       .
    //      i       .
    const dp = Array.from({ length: nums.length }, () => [1, 1])

    for (let i = 0; i < nums.length; i ++) {
        for (let j = 0; j < i; j ++) {
            if (nums[i] > nums[j]) {
                dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1)
            } else if (nums[i] < nums[j]) {
                dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1)
            }
        }
    }

    return Math.max(...dp.flat())
};
```