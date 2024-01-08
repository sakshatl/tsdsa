export { };

function productExeceptSelf(nums: number[]): number[] {
  const n = nums.length;

  // Initialize two arrays to store products to the left and right of each element
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);

  // Calculate products to the left of each element
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }
  
  // Calculate products to the right of each element
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }
  
  // Calculate the final result by multiplying left and right products for each element
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }
  
  return result;
}

function main() {
  console.log(productExeceptSelf([1, 2, 3, 4]));
  console.log(productExeceptSelf([-1, 1, 0, -3, 3]));
}

main();