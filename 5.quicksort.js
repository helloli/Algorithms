/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
  function quickSort (arr, start, end) {
    if (start >= end) {
        return arr;
    }
    let i = start;
    let j = end;
    let mid = arr[Math.floor((i + j) / 2)];

    while (i <= j) {
      while (arr[i] < mid) {
        i += 1;
      }
      while (arr[j] > mid) {
        j -= 1;
      }

      if (i <= j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i += 1;
        j -= 1;
      }
    }
    quickSort(arr, start, i - 1);
    quickSort(arr, i, end);
    return arr;
  }
  
  return quickSort(nums, 0, nums.length - 1);
};

console.log(sortArray([-1, 2, -8, -10, 4, -435, 4, 0, -1, -8]));