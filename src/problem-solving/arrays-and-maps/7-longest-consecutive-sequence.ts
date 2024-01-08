export { };

/*
  PROBLEM (LONGEST CONSECUTIVE SEQUENCE):

  - Given an unsorted array of integers nums, 
  - return the length of the longest consecutive elements sequence.
*/

/*
  SOLUTION (BRUTE FORCE):

  - sort the arary
  - and then keep a check for longest consecutive sequence
  - not accepted as sort will work in O(logN)
*/

/*
  SOLUTION (USING MAP / SET):

  - convert the array to a set of unique numbers
  - draw the numbers on a number line to visualize for sequence
  - a sequence will be formed when a number will not have any member to its left
  - in that case we keep a count of the number that are after it in a variable 'longest'
  - update the result using max(longest, result)
*/





function longestConsecutive(nums: number[]): number {
  let result = 1;

  const set = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    let longest = 1;
    let num = nums[i];
    
    if(!set.has(num - 1)) {
      while (set.has(num + 1)) {
        longest = longest + 1;
        num = num + 1;
      }
    }

    result = Math.max(longest, result);
  }

  return result;
}

function main() {
  console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
  console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
}

main();