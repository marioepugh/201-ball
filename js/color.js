'use strict';

var colorContainer = document.getElementById('colorContainer');
var ballContainer = document.getElementsByClassName('ball')[0];

function selectColor(event) {
  console.log(event.target.id);
  ballContainer.id = event.target.id;
  localStorage.userColor = JSON.stringify(event.target.id);
}
colorContainer.addEventListener('click', selectColor);
ballContainer.id = 'black';
localStorage.userColor = JSON.stringify(ballContainer.id);
