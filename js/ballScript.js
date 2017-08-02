'use strict';

var ballContainer = document.getElementById('ballOuter');
var ballContent = document.getElementById('ballContent');
var finalGreetingP = document.getElementById('finalGreeting');
// Hey Ron, here is the Survival Ball that you created. It will give you answers/motivation regarding HTMl and Javascript.

var answers = ball.answers;
var picked = ['traditional', 'js', 'css'];
var filtered = [];
var userName = 'SpaceNeedle';
var optionSelected = '';
var ballColor = '#db2fda';


picked.forEach(function(item) {
  filtered.push(answers[item]);
});

var combinedAnswers = filtered.reduce(function(a, b) {
  return a.concat(b);
}, []);



for (var i = 0; i < picked.length; i++) {
  if (i === picked.length - 1) {
    optionSelected += ' and ' + picked[i];
  } else {
    optionSelected += picked[i] + ', ';

  }
}



var randomNumber = function(num) {
  return Math.floor(Math.random() * num);
};

var changeQuote = function() {
  ballContent.textContent = combinedAnswers[randomNumber(combinedAnswers.length)];
};

ballContainer.style.backgroundColor = ballColor;


finalGreetingP.textContent = 'Hey ' + userName + ', here is the Survival Ball that you created. It will give you ' + optionSelected + ' phrases.';
changeQuote();

ballContainer.addEventListener('mouseover', changeQuote);
