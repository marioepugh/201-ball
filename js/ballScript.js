'use strict';

var ballContainer = document.getElementById('ballOuter');
var ballContent = document.getElementById('ballContent');

var answers = ball.answers;
var picked = ['traditional', 'js'];
var filtered = [];

picked.forEach(function(item) {
  filtered.push(answers[item]);
});

var conbinedAnswers = filtered.reduce(function(a, b) {
  return a.concat(b);
}, []);

console.log(conbinedAnswers);

var randomNumber = function(num) {
  return Math.floor(Math.random() * num);
};

var changeQuote = function() {
  ballContent.textContent = conbinedAnswers[randomNumber(conbinedAnswers.length)];
};

changeQuote();

ballContainer.addEventListener('mouseover', changeQuote);
