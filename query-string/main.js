const queryString = {
  stringify: (params) => {
    let url = `?`
    if (Object.keys(params).length === 0 && params.constructor === Object) {
      return ''
    }
    for (let param in params) {
      url += `${param}=${params[param]}&`
    }

    return url.slice(0, url.length - 1)
  }
}

console.log(queryString.stringify({ id: 1 }))
// -> "?id=1"

console.log(queryString.stringify({ skill: 'JavaScript', level: 'beginner' }))
// -> "?language=JavaScript&level=beginner"

console.log(queryString.stringify({}))
// -> ""

console.log(queryString.stringify({ foo: 'bar', baz: 'qux', quux: 'corge' }))
// -> "?foo=bar&baz=qux&quux=corge"
