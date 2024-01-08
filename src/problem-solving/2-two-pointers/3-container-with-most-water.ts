export { };


/*
  PROBLEM (CONTAINER WITH MOST WATER):

  - You are given an integer array height of length n. 
  - There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
  - Find two lines that together with the x-axis form a container, such that the container contains the most water.
  - Return the maximum amount of water (area) a container can store.
*/

/*
  SOLUTION (BRUTE FORCE):

  - let "globalArea" be initialized to 0
  - for every height in heights calculate the area with other heights 
  - store this area in "currentArea"
  - check if currentArea is greater than globalArea then update otherwise continue
  - return globalArea at the end
*/

/*
  SOLUTION (2-POINTERS):
  
  - initialize a variable maxArea with 0 
  - keep 2 pointers "start" and "end"
  - while start < end
    - calculate a currentMaxArea using (end - start) * Math.min(heights[start], heights[end])
    - and update maxArea with Math.max(currentMaxArea, maxArea)
    - Now, for moving the pointer we check which height is greater, to get maximum area we don't want to give up on max height
  - return maxArea at the end

*/

function maxAreaBruteForce(heights: number[]): number {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      if (j !== i) {
        let width = Math.abs(j - i);
        let height = Math.min(heights[i], heights[j]);
        let currentMaxArea = width * height;
        maxArea = Math.max(currentMaxArea, maxArea);
      }
    }
  }

  return maxArea;
}

function maxAreaOptimized(heights: number[]): number {
  let maxArea = 0;

  let start = 0;
  let end = heights.length - 1;

  while (start < end) {
    let currentMaxArea = (end - start) * Math.min(heights[start], heights[end]);
    maxArea = Math.max(currentMaxArea, maxArea);

    // Move the pointer to greater height
    if (heights[start] < heights[end]) {
      start = start + 1;
    } else {
      end = end - 1;
    }
  }

  return maxArea;
};

function main() {
  console.log(maxAreaBruteForce([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
  console.log(maxAreaBruteForce([1, 5, 4, 3])); // 6

  // console.log(maxAreaOptimized([1, 8, 6, 2, 5, 4, 8, 3, 7]));
}

main();

