const omit = (target, keys) => {
  const newTarget = {}
  Object.keys(target)
    .filter(key => !keys.includes(key))
    .forEach(key => newTarget[key] = teacher[key])
  return newTarget
}

const teacher = {
  name: 'Ron Perris',
  subject: 'Software Development',
  powerLevel: 9000
}

console.log(omit(teacher, ['subject', 'powerLevel']))
/**
 * {
 *   name: 'Ron Perris'
 * }
 */
