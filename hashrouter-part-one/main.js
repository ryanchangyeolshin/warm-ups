function unhideView($view) {
  $view.setAttribute('class', 'view')
}

function hideView($view) {
  $view.setAttribute('class', 'view hidden')
}

window.addEventListener('hashchange', (e) => {
  const $fire = document.querySelector('#fire')
  const $water = document.querySelector('#water')
  const $grass = document.querySelector('#grass')
  if (e.target.location.href.includes('fire')) {
    hideView($water)
    hideView($grass)
    unhideView($fire)
  }
  else if (e.target.location.href.includes('water')) {
    hideView($fire)
    hideView($grass)
    unhideView($water)
  }
  else if (e.target.location.href.includes('grass')) {
    hideView($fire)
    hideView($water)
    unhideView($grass)
  }
  else {
    hideView($fire)
    hideView($water)
    hideView($grass)
  }
})
