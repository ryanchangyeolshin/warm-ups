/* eslint-disable no-unused-vars */
var randomPalindromeString1 = 'madam'

var randomPalindromeString2 = 'nurses run'

function isPalindrome(string) {
  var trimmedString = string.replace(' ', '')
  var reversedArray = []
  for (var i = trimmedString.length - 1; i >= 0; i--) {
    reversedArray.push(trimmedString[i])
  }
  newString = reversedArray.join('')

  return trimmedString === newString
}

document.write('<h1>' + isPalindrome(randomPalindromeString1) + '</h1>')
document.write('<h1>' + isPalindrome(randomPalindromeString2) + '</h1>')
