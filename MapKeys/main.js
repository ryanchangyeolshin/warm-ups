function mapKeys(target, transform) {
  const keys = Object.keys(target)
  const newKeys = keys
    .map(key => transform(key))
  const newTarget = {}
  for (var i = 0; i < newKeys.length; i++) {
    newTarget[newKeys[i]] = target[newKeys[i].toLowerCase()]
  }
  return newTarget
}

const teacher = {
  name: 'Ron Perris',
  subject: 'Software Development'
}

console.log(mapKeys(teacher, key => key.toUpperCase()))
