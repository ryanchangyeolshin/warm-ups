const flattenDeep = list => {
  const newList = []
  list.map(element => {
    typeof element === 'number'
      ? newList.push(element)
      : flattenDeep(element).forEach(newElement => newList.push(newElement))
  })
  return newList
}

const flattenDeep2 = list => {
  return array.reduce((flattened, value) =>
    Array.isArray(value)
      ? flattened.concat(...flattenedDeep(value))
      : flattened.concat(value)
  )
}

console.log(flattenDeep([1, [2, [3, [4]], 5]]))
// [1, 2, 3, 4, 5]

console.log(flattenDeep2([1, [2, [3, [4]], 5]]))
