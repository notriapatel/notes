function testReturnsHTMLList() {
  var view = new View();
  view.array = ["Favourite food: pesto", "Favourite drink: seltzer"]
  view.createString()
  assert.isTrue(view.string === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>")
}

testReturnsHTMLList();
