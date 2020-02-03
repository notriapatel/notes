function testNoteTakesText() {
  var note = new Note();
  assert.isTrue(note.text === 'My favourite language is JavaScript');
};

testNoteTakesText();
