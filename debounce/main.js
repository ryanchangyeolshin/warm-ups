function debounce(delay, procedure) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(procedure, delay, ...args)
  }
}

// const debounced = debounce(delay, procedure)

const $button = document.createElement('button')
$button.textContent = 0
document.body.appendChild($button)

$button.addEventListener('click', debounce(1000, ({ target }) => {
  target.textContent++
}))
