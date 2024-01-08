function twoSum(nums: number[], target: number): number[] {
  let start = 0;
  let end = nums.length - 1;

  while(start < end) {
    let sum = nums[start] + nums[end];

    if(sum === target) {
      return [start + 1, end + 1];
    } else if (sum > target) {
      end = end - 1;
    } else {
      start = start + 1;
    }
  }

  return [-1, -1];
}