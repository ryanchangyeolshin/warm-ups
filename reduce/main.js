var numbers = [1, 2, 3, 4, 5]

function reduce(list, combinator, initialValue) {
  var finalValue = initialValue
  for (var i = 0; i < list.length; i++) {
    finalValue = combinator(finalValue, list[i])
  }
  return finalValue
}

console.log(reduce(numbers, function (total, number) {
  return total + number
}, 0))
// -> 15

console.log(reduce(numbers, function (product, number) {
  return product * number
}, 1))
// -> 120

console.log(reduce(numbers, function ($numbers, number) {
  var $number = document.createElement('li')
  $number.textContent = number
  $numbers.appendChild($number)
  return $numbers
}, document.createElement('ul')))
/*
 * <ul>
 *   <li>1</li>
 *   <li>2</li>
 *   <li>3</li>
 *   <li>4</li>
 *   <li>5</li>
 * </ul>
 */
