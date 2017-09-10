/* eslint-disable no-unused-vars */
var $list = document.querySelector('.list')
var $text = document.querySelector('#text')
var $submitButton = document.querySelector('#submit-button')
var $deleteButton = null;
var idAttribute = null;

// This variable represents the count index of the list items
var listIndex = 1;

function renderListItems() {
  // Create the list element
  var $listItem = document.createElement('li')

  // Create the delete button element
  $deleteButton = document.createElement('button')

  // Give the created list element a class attribute and push it to the array
  $listItem.setAttribute('class', 'list-items')
  // Also give the $listItem an id attribute associated with the index
  $listItem.setAttribute('id', 'list' + listIndex)

  // Give the delete button an id attribute
  $deleteButton.setAttribute('class', 'delete-button')
  $deleteButton.setAttribute('id', listIndex)

  // Then increment the listIndex by one
  listIndex++

  // Make the text content
  $listItem.textContent = $text.value
  $deleteButton.textContent = 'X'

  // Append the delete button to the <li> tag
  $listItem.appendChild($deleteButton)

  return $listItem
}

function deleteList(e) {
  idAttribute = '#list' + e.target.getAttribute('id')
  console.log(idAttribute)
  var $listItem = document.querySelector(idAttribute)

  $list.removeChild($listItem)
}

$submitButton.addEventListener('click', function() {
  $list.appendChild(renderListItems())

  // Make the input box empty once clicked submit
  $text.value = ''

  // Reassign the delete button
  $deleteButton = document.querySelectorAll('.delete-button')

  // Iterate through the delete buttons
  for (var i = 0; i < $deleteButton.length; i++) {
    $deleteButton[i].addEventListener('click', function (e) {
      deleteList(e)
    })
  }
})
