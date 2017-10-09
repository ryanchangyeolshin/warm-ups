/* global queryString */
/* eslint-disable no-unused-vars */

class HashRouter {
  constructor($views) {
    this.$views = Array.from($views)
    this.isListening = false
    this.handlers = {}
  }
  when(hash, handler) {
    this.handlers[hash] = handler
  }
  push(hash, params) {
    const newHash = hash + queryString.stringify(params)
    window.location.hash = newHash
  }
  match(fullHash) {
    const index = fullHash.indexOf('?')
    const query = fullHash.slice(index + 1, fullHash.length)
    const params = queryString.parse(query)
    let path = fullHash.slice(0, index)
    if (path === 'list') {
      const handlerFunc = this.handlers[path]
      this.$views.forEach($view => {
        if ($view.getAttribute('id') === path) {
          handlerFunc($view, params)
          this.$views.forEach($view => {
            if ($view.getAttribute('id') === path) {
              $view.setAttribute('class', 'view')
            }
            else {
              $view.setAttribute('class', 'view hidden')
            }
          })
        }
      })
    }
    else if (path === 'details') {
      const handlerFunc = this.handlers[path]
      this.$views.forEach($view => {
        if ($view.getAttribute('id') === path) {
          handlerFunc($view, params)
          this.$views.forEach($view => {
            if ($view.getAttribute('id') === path) {
              $view.setAttribute('class', 'view')
            }
            else {
              $view.setAttribute('class', 'view hidden')
            }
          })
        }
      })
    }
    else {
      path = 'list'
      const handlerFunc = this.handlers[path]
      this.$views.forEach($view => {
        if ($view.getAttribute('id') === path) {
          handlerFunc($view, params)
          this.$views.forEach($view => {
            if ($view.getAttribute('id') === path) {
              $view.setAttribute('class', 'view')
            }
            else {
              $view.setAttribute('class', 'view hidden')
            }
          })
        }
      })
    }
  }
  listen() {
    if (this.isListening) return
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1)
      this.match(hash)
    })
    window.dispatchEvent(new Event('hashchange'))
    this.isListening = true
  }
}
