const sampleSize = (source, size) => {
  const arr = []
  source.length < size ? size = source.length : size = size
  while (size > 0) {
    let random = Math.floor(Math.random() * source.length)
    arr.push(source[random])
    source.splice(random, 1)
    size--
  }
  return arr
}

const sampleSize2 = (source, size) => {
  source.length < size ? size = source.length : size = size
  if (source.length === size) {
    console.log(source)
    return source
  }
  source.splice(Math.floor(Math.random() * source.length), 1)
  sampleSize2(source, size)
}

sampleSize2([1, 2, 3], 2)
// [3, 1]

sampleSize2([1, 2, 3], 4)
// [2, 3, 1]

sampleSize2([1, 2, 3, 1], 3)
// [2, 1, 1]
