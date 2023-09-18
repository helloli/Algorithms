/* 元素交换 */
function swap(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

/* 哨兵划分 */
function partition(nums, left, right) {
  // two 
}


function quickSort(nums, left, right) {
  // exit
  if (left >= right) return;
  
  // find pivot
  const pivot = partition(nums, left, right);

  // sort the left and the right subarray
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, nums.length - 1);
}

const nums = [-1, 2, -8, -10, 4, -435, 4, 0, -1, -8]
quickSort(, 0, 9)
console.log();
