const chunk = (list, size) => {
  const chunked = []
  while(list.length !== 0) {
    const sliced = list.splice(0, size)
    chunked.push(sliced)
  }
  return chunked
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(chunk(numbers, 2))
// [[1, 2], [3, 4], [5, 6], [7, 8]]

console.log(chunk(numbers, 3))
// [[1, 2, 3], [4, 5, 6], [7, 8]]
