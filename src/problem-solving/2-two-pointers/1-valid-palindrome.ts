export { };

/*
  PROBLEM (VALID PALINDROME):

  - Given a string s, 
  - return true if it is a palindrome, or false otherwise.
*/

/*
  NOTE:

  - A phrase is a palindrome if 
  - after converting all uppercase letters into lowercase letters 
  - removing all non-alphanumeric characters 
  - it reads the same forward and backward.
*/

/*
  SOLUTION 1:

  - take the string and reverse it
  - check for string equality
*/

/*
  SOLUTION 2:

  - keep 2 pointers (start and end)
  - while start < end
  - if str[start] === start[end] continue, else break and return false
  - return true at the end
*/

function isPalindrome(str: string): boolean {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // remove all special chars and convert to lowercase

  if (str.length === 0) return true;

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    } else {
      start = start + 1;
      end = end - 1; 
    }
  }

  return true;
}

function main() {
  console.log(isPalindrome("BOB"));
  console.log(isPalindrome("A man, a plan, a canal: Panama"))
}

main();