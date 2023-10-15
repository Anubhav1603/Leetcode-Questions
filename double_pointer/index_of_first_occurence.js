/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  word_length = needle.length;
  counter = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[counter]) {
      counter++; //for counting words
      if (counter === word_length) {
        return i - (counter - 1);
      }
    } else {
      i = i - counter;
      counter = 0;
    }
  }
  return -1;
};

//--------------------------Best-solution------------------------
// i tried without using built in methods other solutions were complicated so i didn't written
