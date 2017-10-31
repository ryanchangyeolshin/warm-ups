const deepEquals = (val1, val2) => {
  return JSON.stringify(val1) === JSON.stringify(val2)
}

const deepEquals2 = (val1, val2) => {
  if (typeof(val1) === typeof(val2)) {
    switch (typeof(val1)) {
      case 'object':
        if (Array.isArray(val1)) {
          for (var i = 0; i < val1.length; i++) {
            if (val1[i].toString() !== val2[i].toString()) {
              return false
            }
          }
          return true
        }
        else {
          return true
        }
        break
      default:
        return val1 === val2
    }
  }
  else {
    return false
  }
}

console.log(deepEquals(42, 42)) // true

console.log(deepEquals([1, 2, 3], [1, 2, 3])) // true

console.log(deepEquals({ foo: 'bar' }, { foo: 'bar' })) // true

console.log(deepEquals(
  [{ baz: 'qux' }, { corge: 'grault' }],
  [{ baz: 'qux' }, { corge: 'grault' }]
)) // true


console.log(deepEquals2(42, 42)) // true

console.log(deepEquals2([1, 2, 3], [1, 2, 3])) // true

console.log(deepEquals2({ foo: 'bar' }, { foo: 'bar' })) // true

console.log(deepEquals2(
  [{ baz: 'qux' }, { corge: 'grault' }],
  [{ baz: 'qux' }, { corge: 'grault' }]
)) // true
