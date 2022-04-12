 //Palindrome
 function checkPalindrome(str) {
return str === str.split('').reverse().join('');
}
//Anagram
var sort = function(str) {
  return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
}

 function isAnagram(original, test) {
  return original.trim() === test.trim() ? false : sort(original) === sort(test);
}

module.exports = {checkPalindrome,isAnagram};