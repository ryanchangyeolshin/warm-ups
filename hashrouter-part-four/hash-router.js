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
    const hashParams = queryString.stringify(params)
    window.location.hash = hashParams
  }
  show($views, handlers, path, params) {
    const handlerFunc = this.handlers[path]
    const $view = this.$views.find(($view) => {
      return $view.getAttribute('id') === path
    })
    handlerFunc($view, params)
    this.$views.forEach(($view) => {
      if ($view.getAttribute('id') === path) {
        $view.setAttribute('class', 'view')
      }
      else {
        $view.setAttribute('class', 'hidden')
      }
    })
  }
  match(fullHash) {
    const index = fullHash.indexOf('?')
    const query = fullHash.slice(index + 1, fullHash.length)
    const params = queryString.parse(query)
    let path = fullHash.slice(0, index)
    if (path === 'list') {
      this.show(this.$views, this.handlers, path, params)
    }
    else if (!path) {
      path = 'details'
      this.show(this.$views, this.handlers, path, params)
    }
    else {
      path = 'list'
      this.show(this.$views, this.handlers, path, params)
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
