// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // console.log(dancer);

};

MakeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

MakeDancer.prototype.lineUp = function() {
  this.setPosition(Math.random() * 200, 200);
};

// Understanding the Prompt
// all other dancers will be subclasses of this dancer parent class
// class traits that should be inherited by other dancers include
// the ability to dance
// the ability to stop dancing
// and the ability to line Up
// inheritence should be pseudoclassical (not functional as it currently is nor ES6 like with 6ees)

// Tasks

// Task 1
// Make at least 2 new kinds of dancers
// each new dancer must have their own factory function
// (similar to beesbeesbees)
// make sure the new JS files for new dancers are included in dancefloor.html
// Add a link in the top bar of dancefloor.html
// to create a dancer of each new type you create
// Write tests for new types.
// Use spec/blinkyDancerSpec.js as a template for new test files
// Make sure to include them in SpecRunner.html.

// Task 2
// add a button for each new dancer so that when it is clicked (add in dancefloor.html)
// new Dancers are added onto the dance floor

/*function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}*/