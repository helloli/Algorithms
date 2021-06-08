/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  const p = nums.length - k ;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let temp = partition(nums, left, right);
    console.log(temp, left, right);

    if (temp === p) {
      break;
    } else if (temp < p) {
      left = temp + 1;
    } else {
      right = temp - 1;
    }
  }

  return nums[p];
};

function partition(nums, left, right) {
  let i = left + 1;
  let j = right;

  while (true) {
    while (nums[i] <= nums[left] && i < right) {
      i += 1;
    }
    while (nums[j] >= nums[left] && j > left) {
      j -= 1;
    }
    console.log(nums, i, nums[i], j, nums[j]);
    if (i >= j) {
      break;
    }
    swap(nums, i, j);
  }
  swap(nums, left, j);

  return j;
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

const nums = [3,3,3,3,3,3,3,3,3];
// partition(nums, 0, 8);
console.log(findKthLargest(nums, 4));


const findKthLargest = function (nums, k) {
  k = nums.length - k;
  return quickselect(0, nums.length - 1);

  function quickselect(left, right) {
    if (left === right) return nums[left];
    const pivotIdx = partition(left, right);
    if (k < pivotIdx) return quickselect(left, pivotIdx, k, nums);
    if (k > pivotIdx) return quickselect(pivotIdx + 1, right, k, nums);
    return nums[k];
  }

  function partition(left, right) {
    const randomIdx = left + Math.floor(Math.random() * (right - left));
    const pivot = nums[randomIdx];
    swap(randomIdx, right);
    let pointer = left;
    for (let idx = left; idx <= right; idx++) {
      if (nums[idx] < pivot) {
        swap(pointer, idx);
        pointer++;
      }
    }
    swap(pointer, right);
    return pointer;
  }

  function swap(idx1, idx2) {
    const temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
  }
};
