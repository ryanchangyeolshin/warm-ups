var person = {
  name: 'Ron',
  role: 'Mentor',
  powerLevel: 9000,
  favoriteColor: '#000'
}

function pick(model, keys) {
  var arr = {}
  for (var i = 0; i < keys.length; i++) {
    arr[keys[i]] = model[keys[i]]
  }
  return arr
}

console.log(pick(person, ['name', 'powerLevel']))
/*
 * {
 *   name: 'Ron',
 *   powerLevel: 9000
 * }
 */
