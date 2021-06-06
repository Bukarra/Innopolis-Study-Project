"use strict";

var openBtn = document.getElementById('btn-prize-open');
var popup = document.querySelector('#prize-popup');
var closeBtn = document.querySelector('#prize-popup__close');
var nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
var emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;

function popupToggle() {
  popup.classList.toggle('hidden');
}

var ERROR_CLASS_NAME = 'modal__error';
var FOCUSED_CLASS_NAME = '';

function initializeField(field) {
  var input = field.getElementsByTagName('input')[0];
  input.value = '';
  field.classList.remove(ERROR_CLASS_NAME);
}

initializeField(nameField);
initializeField(emailField);
openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;