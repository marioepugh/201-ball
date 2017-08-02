'use strict';

var ballContainer = document.getElementById('ballOuter');
var ballContent = document.getElementById('ballContent');


var answers = ball.answers;
var picked = ['html', 'css', 'js'];

var arr = [];

picked.forEach(function(item) {
  arr.push(answers[item]);
});

var combined = arr.reduce(function(a, b) {
  return a.concat(b);
}, []);

console.log(combined);

// console.log(answersFiltered);


// picked.forEach(function(item) {
//   // console.log(item);
//   for (var key in answers) {
//     // console.log(key);
//     if (key === item){
//       // arr.push(answers[key]);
//       console.log(key)
//     }
//   }
// });
//





console.log(answers);

var randomNumber = function(num) {
  return Math.floor(Math.random() * num);
};


var changeQuote = function() {
  ballContent.textContent = answers[randomNumber(answers.length)];
};



changeQuote();

ballContainer.addEventListener('mouseover', changeQuote);
