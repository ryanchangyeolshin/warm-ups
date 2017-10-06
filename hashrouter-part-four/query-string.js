/* eslint-disable no-unused-vars */

const queryString = {
  parse: query => {
    return query
      .replace(/^\?/)
      .split('&')
      .map(param => param.split('='))
      .reduce((params, [key, value]) =>
        Object.assign(params, { [key]: value })
      , {})
  },
  stringify: params => {
    return Object
      .keys(params)
      .map((key, i) =>`${i ? '' : '?' }${key}=${params[key]}`)
      .join('&')
  }
}
