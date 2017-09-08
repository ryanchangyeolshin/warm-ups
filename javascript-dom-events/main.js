/* eslint-disable no-unused-vars */
var $list = document.querySelector('.list')
var $text = document.querySelector('#text')
var $button = document.querySelector('#submit-button')

function renderListItems() {
  // Create the list element
  var $listItem = document.createElement('li')

  // Create the delete button element
  var $deleteButton = document.createElement('button')

  // Give the created list element a class attribute
  $listItem.setAttribute('id', 'list-items')

  // Make the text content equal to the user input
  $listItem.textContent = $text.value

  // Append it as the child of the <ul class="list"> tag
  $list.appendChild($listItem)

  // Provide a setTimeout alert
  setTimeout(function() {
    alert('You typed in a list!')
  }, 1000)
}

function deleteList(e) {
  var $listItem = e.target;
  console.log($listItem)
}

$button.addEventListener('click', renderListItems)
