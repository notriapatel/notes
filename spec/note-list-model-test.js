function testArrayReturnsNotes() {
  var list = new List();
  list.newNote("My favourite language is JavaScript")
  list.newNote("Favourite drink: seltzer")
  
  assert.isTrue(list.array[0] === 'My favourite language is JavaScript');
  assert.isTrue(list.array[1] === 'Favourite drink: seltzer');
}

testArrayReturnsNotes();
