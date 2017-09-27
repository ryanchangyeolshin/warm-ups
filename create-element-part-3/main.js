function createElement(tagName, attributes, children) {
  var $element = document.createElement(tagName)
  for (var attribute in attributes) {
    $element.setAttribute(attribute, attributes[attribute])
  }
  for (var i = 0; i < children.length; i++) {
    if (children[i] instanceof Node) {
      $element.appendChild(children[i])
    }
    else {
      $element.textContent = children[i]
    }
  }
  return $element
}

const $book =
  createElement('div', { 'data-id': 1234 }, [
    createElement('h1', { class: 'title' }, ['Clean Code']),
    createElement('h4', { class: 'author' }, ['Robert C. Martin'])
  ])

console.log($book)

/* $book
 * <div data-id="1234">
 *   <h1 class="title">Clean Architecture</h1>
 *   <h4 class="author">Robert C. Martin</h4>
 * </div>
 */

const $pikachu =
  createElement('div', { class: 'card', 'data-number': '025' }, [
    createElement('img', { class: 'card-img-top', src: 'https://goo.gl/GZPhnx', alt: 'Pikachu' }, []),
    createElement('div', { class: 'card-body' }, [
      createElement('h4', { class: 'card-title' }, ['Pikachu']),
      createElement('p', { class: 'card-text' }, [
        'Whenever Pikachu comes across something new, it blasts it with a jolt' +
        ' of electricity. If you come across a blackened berry, it\'s evidence' +
        ' that this Pokémon mistook the intensity of its charge.'
      ]),
      createElement('a', { href: '#', class: 'btn btn-primary' }, ['I choose you!'])
    ])
  ])

console.log($pikachu)

/* $pikachu
 * <div class="card" data-number="025">
 *   <img class="card-img-top" src="https://goo.gl/GZPhnx" alt="Pikachu">
 *   <div class="card-body">
 *     <h4 class="card-title">Pikachu</h4>
 *     <p class="card-text">
 *       Whenever Pikachu comes across something new, it blasts it with a jolt
 *       of electricity. If you come across a blackened berry, it's evidence
 *       that this Pokémon mistook the intensity of its charge.
 *     </p>
 *     <a href="#" class="btn btn-primary">I choose you!</a>
 *   </div>
 * </div>
 */

const students = [
  'Ryan',
  'Aaron',
  'Peter',
  'Alex',
  'Raf',
  'Hoshiki',
  'Riley'
]

const $students =
  createElement('ul', { class: 'list-group' }, students.map(function (student) {
    return createElement('li', { class: 'list-group-item' }, [student])
  }))

console.log($students)

/* $students
 * <ul class="list-group">
 *   <li class="list-group-item">Ryan</li>
 *   <li class="list-group-item">Aaron</li>
 *   <li class="list-group-item">Peter</li>
 *   <li class="list-group-item">Alex</li>
 *   <li class="list-group-item">Raf</li>
 *   <li class="list-group-item">Hoshiki</li>
 *   <li class="list-group-item">Riley</li>
 * </ul>
 */
