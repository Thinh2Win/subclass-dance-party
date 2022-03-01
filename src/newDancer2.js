var MakeNewDancer2 = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  this.$node.addClass('Dancer2');
  this.$node.addClass('shake');
  this.$node.prepend('<img id="abgMulan" src="images/ABGmulan.png">');
};

MakeNewDancer2.prototype = Object.create(MakeDancer.prototype);
MakeNewDancer2.prototype.constructor = MakeNewDancer2;

MakeNewDancer2.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.step();
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};
