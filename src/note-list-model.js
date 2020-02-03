'use strict';

function List() {
  // this.array = ['My favourite language is JavaScript', 'Favourite drink: seltzer']
  this.array = []
}

List.prototype.newNote = function(text) {
  this.array.push(text)
}
