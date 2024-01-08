export { };

/*
  PROBLEM:
  - Given an integer array nums, 
  - return true if any value appears at least twice in the array, 
  - and return false if every element is distinct.
*/

/*
  SOLUTION:
  
  - We can create a map 
  - For every num in the array we can insert it to the map
  - If the number exists in the map we increment it's count else insert it and set count as 1
  - At the end we iterate over all the keys in the map and check if there exists count > 1
*/

function containsDuplicate(nums: number[]) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if(map.has(num)) {
      const value = map.get(num);
      map.set(num, value + 1);
    } else {
      map.set(num, 1);
    }
  }

  const mapValues = Array.from(map.values());

  for (let i = 0; i < mapValues.length; i++) {
    const value = mapValues[i];

    if (value > 1) {
      // Contains duplicate
      return true;
    }
  }

  return false;
}


function main() {
  console.log(containsDuplicate([1, 2, 3, 1]));
  console.log(containsDuplicate([1, 2, 3, 4]));
  console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

}

main();

