// complete the given function

function palindrome(s){
  s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // compare the original string with the reversed string
  return s === s.split('').reverse().join('');
}
module.exports = palindrome
