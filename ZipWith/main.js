const zipWith = (...lists) => {
  const iteratee = lists.pop()
  const zipped = []
  for (let i = 0; i < lists[0].length; i++) {
    const filtered = []
    lists.forEach(list => filtered.push(list[i]))
    zipped.push(iteratee(...filtered))
  }
  return zipped
}

const zipWith2 = (...lists) => {
  const iteratee = lists.pop()
  const [ longest ] = lists.slice().sort((a, b) => a.length < b.length)
  longest.map((_, i) => iteratee(...lists.map(list => list[i])))
}

zipWith2([1, 2], [10, 20], [100, 200], (x, y, z) => {
  return x + y + z
})
// [111, 222]

zipWith2([1, 2], [10, 20], [100], (x, y, z) => {
  return x + y + z
})
// [111, NaN]
