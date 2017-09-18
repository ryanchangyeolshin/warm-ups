function ransomCase(message) {
  var messageArray = []
  for (var i = 0; i < message.length; i++) {
    if (i % 2 === 0) {
      var letter = message[i].toUpperCase()
      messageArray.push(letter)
    }
    else {
      var letter = message[i].toLowerCase()
      messageArray.push(letter)
    }
  }
  return messageArray.join('')
}

console.log(ransomCase('I know what you did last summer.'))
