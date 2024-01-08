export { };


// BRUTE FORCE SOLUTION:

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let numToFind = target - nums[i];

    for (let j = 0; j < nums.length; j++) {
      if (j !== i && nums[j] === numToFind) {
        return [i, j];
      } 
    }
  }

  return [-1, -1];
}

// OPTIMIZED SOLUTION (USING MAP):

function twoSumOptimized(nums: number[], target: number): number[] {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    map.set(key, i);
  }

  for (let i = 0; nums.length; i++) {
    let numToFind = target - nums[i];

    if (map.has(numToFind) && map.get(numToFind) !== i) {
      return [map.get(numToFind), i];
    }

  }

  return [-1, -1];
}

function main() {
  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([3, 2, 4], 6));
  console.log(twoSum([3, 3], 6));

  console.log("=====");

  console.log(twoSumOptimized([2, 7, 11, 15], 9));
  console.log(twoSumOptimized([3, 2, 4], 6));
  console.log(twoSumOptimized([3, 3], 6));
}

main();