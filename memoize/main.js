const memoize = fn => {
  let lastArg
  let lastValue
  return arg => {
    if (lastArg !== arg) {
      lastArg = arg
      lastValue = fn(arg)
      return lastValue
    }
    else {
      return lastValue
    }
  }
}

const memoized = memoize(n => {
  let result = 0
  while (n--) {
    result += n
  }
  return result
})

console.log(memoized(1000000000))
// ...some time later... 499999999995475700

console.log(memoized(1000000000))
// 499999999995475700 immediately
