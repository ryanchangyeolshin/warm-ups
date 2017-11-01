function throttle(quota, timeFrame, procedure) {
  let calls = 0
  let timeout = null
  return (...args) => {
    if (calls === quota) return
    if (!timeout) {
      timeout = setTimeout(() => {
        calls = 0
        timeout = null
      }, timeFrame)
    }
    calls += 1
    procedure(...args)
  }
}

const $button = document.querySelector('button')

$button.addEventListener('click', throttle(5, 1000, event => {
  const count = parseInt(event.target.textContent, 10)
  $button.textContent = count + 1
}))
