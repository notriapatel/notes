'use strict';

(function(exports) {
  function Note(text) {
    this.text = text
  }

  Note.prototype.insertText = function(text) {
    this.text = text
  }
  exports.Note = Note
})(this)