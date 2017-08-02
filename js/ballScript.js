'use strict';

var ballContainer = document.getElementById('ballOuter');
var ballContent = document.getElementById('ballContent');


var answers = ball.answers.html;

var randomNumber = function(num) {
  return Math.floor(Math.random() * num);
};


var changeQuote = function() {
  ballContent.textContent = answers[randomNumber(answers.length)];

};

changeQuote();

ballContainer.addEventListener('mouseover', changeQuote);
