const memoize = (fn) => {
  let lastArgs = []
  let lastResult
  return (...args) => {
    if (args.length === lastArgs.length
        args.every((_, i) => args[i] === lastArgs[i])) {
      return lastResult
    }
    lastArgs = args
    lastResult = fn(...args)
    return lastResult
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
