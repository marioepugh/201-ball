'use strict';

//get list container and array to store user choices
var ulEl = document.getElementById('listContainer');
var userSelected = [];

var MakeContent = function(liText, liIdName, buttonId, buttonName) {
  this.liText = liText;
  this.liIdName = liIdName;
  this.buttonId = buttonId;
  this.buttonName = buttonName;
};

//object constructor for user choices
MakeContent.prototype.render = function() {
  var liEl = document.createElement('li');
  liEl.textContent = this.liText;
  liEl.id = this.liIdName;
  var button = document.createElement('button');
  liEl.appendChild(button);
  button.id = this.buttonId;
  button.textContent = this.buttonName;
  ulEl.appendChild(liEl);
};

//function to display two options
function twoOptions() {
  var text = ['Do you need answers to your questions?', 'Do you need mental support or motivation?'];
  var button = ['left', 'right'];
  var i = 0;
  while (i < 2) {
    new MakeContent(text[i], 'twoOptionId', button[i], 'Select').render();
    i++;
  }
  ulEl.removeEventListener('click', select);
  ulEl.addEventListener('click', handleClick);
};
twoOptions();

//functions to display three choices
function threeOptionsRight() {
  var text = ['Mood 1', 'Mood 2', 'Mood 3'];
  var button = ['left', 'center', 'right'];
  var i = 0;
  while (i < 3) {
    new MakeContent(text[i], 'threeOptionId', button[i], 'Select').render();
    i++;
  }
  ulEl.removeEventListener('click', handleClick);
  ulEl.addEventListener('click', select);
};

function threeOptionsLeft() {
  var text = ['HTML', 'CSS', 'Javascript'];
  var button = ['html', 'css', 'javascript'];
  var i = 0;
  while (i < 3) {
    new MakeContent(text[i], 'threeOptionId', button[i], 'Select').render();
    i++;
  }
  if (i = 2) {
    createButton();
  }
  ulEl.removeEventListener('click', handleClick);
  ulEl.addEventListener('click', select);
};

//function to create button to go back to first option display
var buttonContainer = document.getElementById('backButton');

function createButton() {
    console.log('no button');
    var button = document.createElement('button');
    buttonContainer.appendChild(button);
    button.id = 'back';
    button.textContent = 'Back';
};

function removeButton() {
  var buttonContainer = document.getElementById('backButton');
  var button = document.getElementById('back');
  buttonContainer.removeChild(button);
};

//event handler for user secelecting options
function select(e) {
  if (event.target.id !== null) {
    event.target.classList.toggle('select');
    if (event.target.classList.length !== 0) {
      userSelected.push(event.target.id);
      console.log(event.target.id + ' is active');
    } else {
      for (var i = 0; i < userSelected.length; i++) {
        if (userSelected[i] === event.target.id) {
          console.log(event.target.id + ' is inactive');
          userSelected.splice(i, 1);
        }
      }
    }
  }
};

//event handler waiting for clicks
function handleClick(e) {
  console.log(event.target.id);
  if (event.target.id === 'right') {
    console.log('clicked');
    ulEl.innerHTML = ' ';
    threeOptionsRight();
    createButton();
  } else if (event.target.id === 'left') {
    ulEl.innerHTML = ' ';
    threeOptionsLeft();
    createButton();
  }
};

function handleBackButton(e) {
  if (event.target.id === 'back') {
    console.log('back button from button');
    ulEl.innerHTML = ' ';
    twoOptions();
    removeButton();
  }
};

ulEl.addEventListener('click', handleClick);
buttonContainer.addEventListener('click', handleBackButton);
