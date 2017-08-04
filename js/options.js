'use strict';

//get list container and array to store user choices
var ulEl = document.getElementById('listContainer');
var buttonContainer = document.getElementById('backAndSubmitButtons');
var userSelected = [];

var textMood = ['<span class="threeSpan">Recommendations</span> <br /> For technical issues or when your code isn\'t working', '<span class="threeSpan">Motivation</span> <br /> Quotes to help you stay optimistic along your journey', '<span class="threeSpan">Coding Jokes</span> <br /> When you could use a good laugh'];
var buttonMood = ['recommendations', 'motivation', 'jokes'];

var textQuestion = ['<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png"/>', ' <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/200px-CSS3_logo_and_wordmark.svg.png"/>', '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png"/>'];
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
  var text = ['<span class="twoSpan">Experience Points</span> <br /> Break out of tunnel vision to help you change the way you\'re looking at your problem<br />', '<span class="twoSpan">Health Points</span> <br /> Feeling overwhelmed?<br /> Take a minute to step back and relax. <br /> We promise, your code will still be there'];
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
function handleClick(event) {
  console.log(event.target.id);
  if (event.target.id === 'right') {
    console.log('clicked');
    ulEl.innerHTML = ' ';
    threeOptions(textMood, buttonMood);
  } else if (event.target.id === 'left') {
    ulEl.innerHTML = ' ';
    threeOptions(textQuestion, buttonQuestion);
  } else {
    console.log('Please select an option!');
  }
};

//event handler for user secelecting options
//pushes choices to array
function select(event) {
  if (buttonQuestion.includes(event.target.id) || buttonMood.includes(event.target.id)) {
    event.target.classList.toggle('select');
    if (event.target.classList.length !== 0) {
      userSelected.push(event.target.id);
      console.log(event.target.id + ' is active');
      event.target.textContent = 'Selected';
    } else {
      for (var i = 0; i < userSelected.length; i++) {
        if (userSelected[i] === event.target.id) {
          console.log(event.target.id + ' is inactive');
          userSelected.splice(i, 1);
          event.target.textContent = 'Select';
        }
      }
    }
  } else {
      console.log('Please select an option!');
  }
};

//event handler for back button
function handleBackAndSubmitButtons(event) {
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
