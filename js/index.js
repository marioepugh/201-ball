'use strict';

function handleFormSubmit(e) {

  var name = e.target.name.value;
  localStorage.storedUserName = JSON.stringify(name);
};

var formSubmit = document.getElementById('form-submit');

formSubmit.addEventListener('submit', handleFormSubmit);
