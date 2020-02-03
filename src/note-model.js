'use strict';

function Note() {
  this.text = null
}

Note.prototype.insertText = function(text) {
  this.text = text
}
