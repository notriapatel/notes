'use strict';

function View() {
  this.list = new List()
  this.array = null
  this.string = null
}

View.prototype.createString = function() {
  this.string =  '<ul><li><div>' + this.array.join('</div></li><li><div>') + "</div></li></ul>"
}
