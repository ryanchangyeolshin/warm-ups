function mapKeys(target, transform) {
  const newTarget = {}
  const keys = Object.keys(target)
  const newKeys = keys
    .map(key => transform(key))
    .forEach(key => {
      newTarget[key] = target[key.toLowerCase()]
    })
  return newTarget
}

const teacher = {
  name: 'Ron Perris',
  subject: 'Software Development'
}

console.log(mapKeys(teacher, key => key.toUpperCase()))
