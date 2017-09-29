const queryString = {
  parse(query) {
    if (!query || query.length <= 1) {
      return {}
    }
    query = query.substring(1, query.length)
    const newQuery = query.replace(/[=, &]/g, ' ')
    const arr = newQuery.split(' ')
    const obj = {}
    for (var i = 0; i < arr.length; i += 2) {
      obj[arr[i]] = arr[i + 1]
    }
    return obj
  }
}

console.log(queryString.parse('?id=1'))
// -> { id: '1' }

console.log(queryString.parse('?skill=JavaScript&level=beginner'))
// -> { skill: 'JavaScript', level: 'beginner' }

console.log(queryString.parse(''))
// -> {}

console.log(queryString.parse('?'))
// -> {}

console.log(queryString.parse('?foo=bar&baz=qux&quux=corge'))
// -> { foo: 'bar', baz: 'qux', quux: 'corge' }
