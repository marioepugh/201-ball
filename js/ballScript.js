'use strict';

var ballContainer = document.getElementById('ballOuter');
var ballContent = document.getElementById('ballContent');
var finalGreetingP = document.getElementById('finalGreeting');
// Hey Ron, here is the Survival Ball that you created. It will give you answers/motivation regarding HTMl and Javascript.


var answers = ball.answers;
// var picked = JSON.parse(localStorage.storedUserSelected);
var filtered = [];
// var userName = JSON.parse(localStorage.storedUserName);
var optionSelected = '';
// var ballColor = JSON.parse(localStorage.userColor);

if (localStorage.storedUserSelected) {
  var picked = JSON.parse(localStorage.storedUserSelected);
} else {
  picked = 'jokes';
}

if (localStorage.storedUserName) {
  var userName = JSON.parse(localStorage.storedUserName);
} else {
  userName = 'User';
}

if (localStorage.userColor) {
  var ballColor = JSON.parse(localStorage.userColor);
} else {
  ballColor = 'gray';
}

picked.forEach(function(item) {
  filtered.push(answers[item]);
});

var combinedAnswers = filtered.reduce(function(a, b) {
  return a.concat(b);
}, []);



for (var i = 0; i < picked.length; i++) {
  if (picked.length === 1) {
    optionSelected += picked[i];
    break;
  }

  if (i === picked.length - 1) {
    optionSelected += ' and ' + picked[i];
  } else {
    optionSelected += picked[i] + ', ';

  }
}

var randomNumber = function(num) {
  return Math.floor(Math.random() * num);
};


var fadeIn = function() {
  var i = 0;
  var fadeTime = setInterval(function() {
    if (i >= 100) {
      clearInterval(fadeTime);
    }
    ballContent.style.opacity = i / 100;
    i += 1;
    console.log(i);

  }, 5);
};

var removeQuote = function() {
  ballContent.style.opacity = 0;
  ballContent.textContent = '';
};

var changeQuote = function() {
  ballContent.style.opacity = 0;
  ballContent.textContent = combinedAnswers[randomNumber(combinedAnswers.length)];
  fadeIn();
};


ballContainer.style.backgroundColor = ballColor;


finalGreetingP.textContent = 'Hey ' + userName + ', here is the Survival Ball that you created. It will give you ' + optionSelected + ' phrases.';
// changeQuote();


ballContainer.addEventListener('mouseout', changeQuote);
ballContainer.addEventListener('mouseover', removeQuote);
