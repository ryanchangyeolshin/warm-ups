function typeEquals(val1, val2) {
  return Object.prototype.toString.call(val1) === Object.prototype.toString.call(val2)
}

function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function isArray(val) {
  return Array.isArray(val)
}

function deepEquals(val1, val2) {
  if (!typeEquals(val1, val2)) return false
  if (isArray(val1)) {
    return val1.length === val2.length &&
           val1.every((element, i) => deepEquals(element, val2[i]))
  }
  if (isObject(val1)) {
    const keys1 = Object.keys(val1)
    const keys2 = Object.keys(val2)
    return keys1.length === keys2.length &&
           keys1.every(key => deepEquals(val1[key], val2[key]))
  }
  return val1 === val2
}

console.log(deepEquals(42, 42)) // true

console.log(deepEquals([1, 2, 3], [1, 2, 3])) // true

console.log(deepEquals({ foo: 'bar' }, { foo: 'bar' })) // true

console.log(deepEquals(
  [{ baz: 'qux' }, { corge: 'grault' }],
  [{ baz: 'qux' }, { corge: 'grault' }]
)) // true
