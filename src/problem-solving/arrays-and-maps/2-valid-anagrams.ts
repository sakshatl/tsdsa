export { };

/*
  PROBLEM:

  - Given two strings s and t, 
  - return true if t is an anagram of s, and false otherwise.
*/

/*
  SOLUTION 1:
  - convert both the strings to lowercase versions
  - sort them
  - and check for string equality

  SOLUTION 2:

  - use map1 for str1 and map2 for str2 (frequency counter)
  - keep a track of character and it's count
  - for each key, value in map1 there should exist a key, value in map2
  - if not, they are not anagrams
*/

function isAnagram(str1: string, str2: string) {
  const length1 = str1.length;
  const length2 = str2.length;

  if (length1 !== length2) return false;
  
  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < length1; i++) {
    let char = str1[i];

    if(map1.has(char)) {
      const value = map1.get(char);
      map1.set(char, value + 1);
    } else {
      map1.set(char, 1);
    }
  }

  for (let i = 0; i < length2; i++) {
    let char = str2[i];

    if(map2.has(char)) {
      const value = map2.get(char);
      map2.set(char, value + 1);
    } else {
      map2.set(char, 1);
    }
  }

  for (let [key, value] of map1) {
    if (map1.get(key) !== map2.get(key)) {
      return false;
    }
  }

  return true;
}

function main() {
  console.log(isAnagram("anagram", "nagaram"));
  console.log(isAnagram("rat", "car"));
}

// main();