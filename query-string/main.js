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

const queryStringTwo = {
  stringify(object) {
    return Object
      .keys(object)
      .map((key, index) => `${!index?'?':'&'}${key}=${object[key]}`)
      .join('')
  }
}

const queryStringThree = {
  stringify: function(object) {
    var keys = Object.keys(object)

    if (keys.length < 1) {
      return ''
    }

    var result = []

    for (var i = 0; i < keys.length; i++) {
      if (i === 0) {
        result.push('?' + keys[i] + '=' + object[keys[i]])
      } else {
        result.push('&' + keys[i] + '=' + object[keys[i]])
      }
    }

    var result.join('')
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
