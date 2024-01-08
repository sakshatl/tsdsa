export { };

function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map();
  
  // Insert the number into the map along with it's count
  for (let i = 0; i < nums.length; i++) {
    const value = map.get(nums[i]);
    map.set(nums[i], value ? value + 1 : 1);
  }

  // Sort the map based upon frequency of each number
  const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  
  // Return K frequent elements
  let result: number[] = [];

  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }

  return result;
}

function main() {
  console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
}

main();