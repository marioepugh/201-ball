'use strict';

//get list container and array to store user choices
var ulEl = document.getElementById('listContainer');
var buttonContainer = document.getElementById('backAndSubmitButtons');
var userSelected = [];
var textMood = ['<span>Mood 1</span> </br> I am mood 1', '<span>Mood 2</span> </br> I am mood 2', '<span>Mood 3</span> </br> I am mood 3'];
var buttonMood = ['left', 'center', 'right'];
var textQuestion = ['<span>HTML</span> </br> Help with HTML', '<span>CSS</span> </br> Help with CSS', '<span>Javascript</span> </br> Help with Javascript'];
var buttonQuestion = ['html', 'css', 'javascript'];

var MakeContent = function(liText, liIdName, buttonId, buttonName) {
  this.liText = liText;
  this.liIdName = liIdName;
  this.buttonId = buttonId;
  this.buttonName = buttonName;
};

//object constructor for user choices
MakeContent.prototype.render = function() {
  var liEl = document.createElement('li');
  liEl.innerHTML = this.liText;
  liEl.id = this.liIdName;
  var button = document.createElement('button');
  liEl.appendChild(button);
  button.id = this.buttonId;
  button.textContent = this.buttonName;
  ulEl.appendChild(liEl);
};

//function to display two options
function twoOptions() {
  var text = ['<span>answers</span> </br> Do you need answers to your questions?', '<span>motovation</span> </br> Do you need mental support or motovation?'];
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
function threeOptions(innerText, buttonId) {
  var i = 0;
  while (i < 3) {
    new MakeContent(innerText[i], 'threeOptionId', buttonId[i], 'Select').render();
    i++;
  }
  createButton();
  ulEl.removeEventListener('click', handleClick);
  ulEl.addEventListener('click', select);
};

//function to create button to go back to first option display
function createButton() {
    console.log('no button');
    var button = document.createElement('button');
    buttonContainer.appendChild(button);
    button.id = 'back';
    button.textContent = 'Back';
    button = document.createElement('button');
    buttonContainer.appendChild(button);
    button.id = 'submit';
    button.textContent = 'submit';
};

function removeButton() {
  var buttonContainer = document.getElementById('backAndSubmitButtons');
  var button = document.getElementById('back');
  var submitButton = document.getElementById('submit');
  buttonContainer.removeChild(button);
  buttonContainer.removeChild(submitButton);
};

//event handler waiting for clicks on first two options
function handleClick(e) {
  console.log(event.target.id);
  if (event.target.id === 'right') {
    console.log('clicked');
    ulEl.innerHTML = ' ';
    threeOptions(textMood, buttonMood);
  } else if (event.target.id === 'left') {
    ulEl.innerHTML = ' ';
    threeOptions(textQuestion, buttonQuestion);
  }
};

//event handler for user secelecting options
//pushes choices to array
function select(e) {
  if (event.target.id !== null) {
    event.target.classList.toggle('select');
    if (event.target.classList.length !== 0) {
      userSelected.push(event.target.id);
      console.log(event.target.id + ' is active');
      event.target.textContent = 'Unselect';
    } else {
      for (var i = 0; i < userSelected.length; i++) {
        if (userSelected[i] === event.target.id) {
          console.log(event.target.id + ' is inactive');
          userSelected.splice(i, 1);
          event.target.textContent = 'Select';
        }
      }
    }
  }
};

//event handler for back button
function handleBackAndSubmitButtons(e) {
  if (event.target.id === 'back') {
    console.log('back button from button');
    localStorage.clear();
    ulEl.innerHTML = ' ';
    userSelected = [];
    twoOptions();
    removeButton();
  } else if (event.target.id === 'submit') {
    console.log('submit');

localStorage.storedUserSelected = JSON.stringify(userSelected);
location.href = "color.html";
  }
};

ulEl.addEventListener('click', handleClick);
buttonContainer.addEventListener('click', handleBackAndSubmitButtons);
