var MakeNewDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  this.$node.addClass('Dancer1');
  this.$node.prepend('<img id="kevinNguyen" src="images/Kevin Nguyen.png">');
};

MakeNewDancer.prototype = Object.create(MakeDancer.prototype);
MakeNewDancer.prototype.constructor = MakeNewDancer;

MakeNewDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.step();
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
