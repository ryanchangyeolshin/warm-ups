/* eslint-disable no-unused-vars */

var array = ['John', 'adagduadguwigdag', 'dude', 'Manny', 'aufuaifhuifhauigfgafgaiuugfaiuw']

function longest(strings) {
  var longestString = null
  for (var i = 0; i < strings.length - 1; i++) {
    if (strings[i].length > strings[i + 1].length) {
      longestString = strings[i]
    }
    else {
      longestString = strings[i + 1]
    }
  }
  return longestString
}

document.write(longest(array))
