function testReturnsHTMLList() {
  var view = new View();
  view.createString("<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>")
  
  assert.isTrue(view.string === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>")
}

testReturnsHTMLList();
