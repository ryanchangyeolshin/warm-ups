var $nav = document.querySelector('nav')

function unhideView($view) {
  $view.classList.remove('hidden')
}

function hideView($view) {
  $view.classList.add('hidden')
}

$nav.addEventListener('click', function (e) {
  var viewId = e.target.getAttribute('data-view-id')
  var views = document.querySelectorAll('.view')

  for (var i = 0; i < views.length; i++) {
    if (views[i].getAttribute('class') === 'view') {
      hideView(views[i])
    }
  }

  for (var i = 0; i < views.length; i++) {
    if (views[i].getAttribute('id') === viewId) {
      unhideView(views[i])
    }
  }
})
