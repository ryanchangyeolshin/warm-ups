var numbers = [5, 10, 15, 20]

function map(list, transform) {
  var array = []
  for (var i = 0; i < list.length; i++) {
    array.push(transform(list[i]))
  }
  console.log(array)
}

map(numbers, function (number) {
  return number / 5
})
// -> [1, 2, 3, 4]

map(numbers, function (number) {
  return number * 2
})
// -> [10, 20, 30, 40]

map(numbers, function (number) {
  return number + 1
})
// -> [6, 11, 16, 21]
