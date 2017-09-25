function createElement(tagName, attributes) {
  var HTMLElement = document.createElement(tagName)
  for (var prop in attributes) {
    HTMLElement.setAttribute(`${prop}`, `${attributes[prop]}`)
  }
  return HTMLElement
}

console.log(createElement('p', { class: 'content' }))
// -> <p class="content"></p>

console.log(createElement('li', { 'data-item-id': 1, class: 'item' }))
// -> <li data-item-id="1" class="item"></li>
