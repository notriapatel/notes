'use strict';

function View() {
  this.list = new List()
  this.string = null
}

View.prototype.createString = function(text) {
  this.list.newNote(text)
  this.string = this.list.array[0]
}
