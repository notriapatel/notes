
(function(exports){
  function Controller() {
    this.noteList = new List()
  }

  Controller.prototype.changeText = function(text) {
    var element = document.getElementById('app')
    element.innerHTML = text
  }

  var controller = function() {
    return new Controller()
  }

  // var controller = new Controller(new List())
  exports.controller = controller
})(this);

// var x = new Controller