var names = ['Ron', 'Courtney', 'Celeste', 'Victor', 'Tim']

function filter(list, predicate) {
  var arr = []
  for (var i = 0; i < list.length; i++) {
    if(predicate(list[i])) {
      arr.push(list[i])
    }
  }
  return arr
}

filter(names, function (name) {
  return name.startsWith('C')
})
// -> ["Courtney", "Celeste"]

filter(names, function (name) {
  return name.includes('i')
})
// -> ["Victor", "Tim"]

filter(names, function (name) {
  return name === "Ron"
})
// -> ["Ron"]
