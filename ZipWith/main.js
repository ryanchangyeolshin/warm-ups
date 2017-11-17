const zipWith = (...lists) => {
  const iteratee = lists.pop()
  const zipped = []
  for (var i = 0; i < lists[0].length; i++) {
    const filtered = []
    lists.forEach(list => filtered.push(list[i]))
    zipped.push(iteratee(...filtered))
  }
  console.log(zipped)
}

zipWith([1, 2], [10, 20], [100, 200], (x, y, z) => {
  return x + y + z
})
// [111, 222]

zipWith([1, 2], [10, 20], [100], (x, y, z) => {
  return x + y + z
})
// [111, NaN]
