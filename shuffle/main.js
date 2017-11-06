function shuffle([ ...list ]) {
  const shuffled = []
  while (list.length) {
    const randomIndex = Math.floor(Math.random() * list.length)
    const [ item ] = list.splice(randomIndex, 1)
    shuffled.push(item)
  }
  return shuffled
}

function shuffleR([ ...list ]) {
  if (!list.length) return []
  const randomIndex = Math.floor(Math.random() * list.length)
  return [...list.splice(randomIndex, 1), ...shuffleR(list)]
}

const numbers = [1, 2, 3, 4]

console.log(shuffle(numbers))
// [3, 2, 4, 1]
