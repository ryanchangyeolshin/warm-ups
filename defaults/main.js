const defaults = (target, source) => {
  return Object.keys(source)
    .filter(key => !Object.keys(target).includes(key))
    .reduce((copy, key) =>
      Object.assign(copy, { [key]: source[key] })
    , target)
}

const celeste = {
  fullName: 'Celeste Shuster',
  role: 'Admissions Advisor',
  powerLevel: 8999
}

const ron = {
  fullName: 'Ron Perris',
  company: 'OC|CS',
  role: 'Founder',
  powerLevel: 9000,
  location: 'Newport Beach CA'
}

console.log(defaults(celeste, ron))
/**
 * {
 *   fullName: 'Celeste Shuster',
 *   company: 'OC|CS',
 *   role: 'Admissions Advisor',
 *   powerLevel: 8999,
 *   location: 'Newport Beach CA'
 * }
 */
