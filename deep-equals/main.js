const deepEquals = (val1, val2) => {
  return JSON.stringify(val1) === JSON.stringify(val2)
}

console.log(deepEquals(42, 42)) // true

console.log(deepEquals([1, 2, 3], [1, 2, 3])) // true

console.log(deepEquals({ foo: 'bar' }, { foo: 'bar' })) // true

console.log(deepEquals(
  [{ baz: 'qux' }, { corge: 'grault' }],
  [{ baz: 'qux' }, { corge: 'grault' }]
)) // true
