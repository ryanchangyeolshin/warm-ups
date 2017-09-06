/* eslint-disable no-unused-vars */
var randomArray = [1, 'Jamie', 'Logan', 3, true]

function flip(array) {
  var newArray = []
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray
}

document.write('<h1>'+ flip(randomArray) + '</h1>')
