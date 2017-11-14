const pickBy = (target, predicate) => {
  const key = Object.keys(target)
    .filter(key => predicate(target[key], key))
  return { [key]: target[key] }
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
/**
 * {
 *   name: 'Ron Perris'
 * }
 */
