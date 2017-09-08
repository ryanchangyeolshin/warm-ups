var parts = [
  {
    id: 1,
    brand: 'Intel',
    name: 'Core i7 7700'
  },
  {
    id: 2,
    brand: 'AMD',
    name: 'Ryzen 7 7100'
  },
  {
    id: 3,
    brand: 'NFC Systems',
    name: 'S4 Mini'
  },
]

function findById(id, collection) {
  if (id > collection.length) {
    throw new Error ('Cannot find by ID!')
  }
  else {
    for (var i = 0; i < collection.length; i++) {
      if(collection[i].id  === id) {
        return collection[i]
      }
    }
  }
}
