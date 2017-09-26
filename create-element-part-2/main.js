function createElement(tagName, attributes, children) {
  const $HTMLElement = document.createElement(tagName)
  for (let attribute in attributes) {
    $HTMLElement.setAttribute(attribute, attributes[attribute])
  }
  for (let i = 0; i < children.length; i++) {
    $HTMLElement.appendChild(children[i])
  }
  return $HTMLElement
}

const $article =
  createElement('div', { 'data-id': 1234 }, [
    createElement('h1', { class: 'title' }, []),
    createElement('h4', { class: 'author' }, []),
    createElement('p', { class: 'content' }, [])
  ])

console.log($article)

/* $article
 * <div data-id="1234">
 *   <h1 class="title"></h1>
 *   <h4 class="author"></h4>
 *   <p class="content"></p>
 * </div>
 */

const $list =
  createElement('ul', { class: "list-group" }, [
    createElement('li', { class: "list-group-item" }, []),
    createElement('li', { class: "list-group-item" }, []),
    createElement('li', { class: "list-group-item" }, [])
  ])

/* $list
 * <ul class="list-group">
 *   <li class="list-group-item"></li>
 *   <li class="list-group-item"></li>
 *   <li class="list-group-item"></li>
 * </ul>
 */

 console.log($list)
