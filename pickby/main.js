const pickBy = (target, predicate) => {
  const key = Object.keys(target)
    .filter(key => predicate(target[key], key))
  return { [key]: target[key] }
}

const pickBy2 = (target, predicate) => {
  return Object.keys(target)
    .filter(key => predicate(target[key], key))
    .reduce((acc, value) => Object.assign(acc, { [value]: target[value] }), {})
}

const teacher = {
  name: 'Ron Perris',
  powerLevel: 9000,
  hasKillerInstincts: true,
  organization: 'Orange Couny Code School'
}

console.log(pickBy(teacher, (value, key) => {
  return typeof value === 'string' &&
         key !== 'organization'
}))

console.log(pickBy2(teacher, (value, key) => {
  return typeof value === 'string' &&
         key !== 'organization'
}))
/**
 * {
 *   name: 'Ron Perris'
 * }
 */
