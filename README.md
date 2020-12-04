# Algorithms

## three sum 三数相加问题

https://leetcode.com/problems/3sum/

### 问题描述

在一个由 number 组成的数组中，找到所有的 3 个数组成的数组，使得这三个数字的和等于给定的数字

### 解答

1. 考虑到时间复杂度肯定大于等于 O(n²) 可以先用 sort 排序，从左到右依次增大
2. 遍历数组，设置两个指针，一个从当前 index 开始往右，一个从最右往左，这三个值的和如果等于 target 则记录下来，如果大于则右边指针向左移动，小于则左侧指针向右移动，如果移动过程中发现值相等则直接继续移动
3. 遍历的出口是当前值大于等于 0

## trapping rain water 雨水收集问题

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

## Climbing Stairs 爬楼梯问题(斐波那契数列)

### 问题描述

楼梯可以一次爬一步，一次爬两步，问怕 N 阶楼梯一共有多少种爬楼梯的方案

### 解法

带缓存的斐波那契数列

## maximum-subarray 最大子序列

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

## Valid Parentheses 括号检测

