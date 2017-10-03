class HashRouter {

  constructor($views) {
    this.$views = $views
    this.isListening = false
  }

  match(hash) {
    for (var i = 0; i < this.$views.length; i++) {
      if ("#" + this.$views[i].getAttribute('id') === hash) {
        this.$views[i].setAttribute('class', 'view')
      }
      else {
        this.$views[i].setAttribute('class', 'view hidden')
      }
    }
  }

  listen() {
    const event = new Event('hashchange')
    if (!this.isListening) {
      window.addEventListener('hashchange', (e) => {
        this.match(window.location.hash)
        this.isListening = true
      })
    }
    window.dispatchEvent(event)
  }
}

const $views = document.querySelectorAll('.view')
const newHash = new HashRouter($views)
newHash.listen()
