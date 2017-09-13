var people = ['Ron', 'Celeste', 'Victor', 'Tim']

function print(value) {
  console.log(value)
}

function forEach(array, printFunction) {
  for (var i = 0; i < array.length; i++) {
    print(array[i])
  }
}

forEach(people, print)

// -> "Ron"
// -> "Celeste"
// -> "Victor"
// -> "Tim
