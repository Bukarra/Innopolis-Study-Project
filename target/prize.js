"use strict";

var openBtn = document.getElementById('btn-prize-open');
var popup = document.querySelector('#prize-popup');
var closeBtn = document.querySelector('#prize-popup__close');
var nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
var emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;
var form = document.getElementById('prize-form');

function popupToggle() {
  popup.classList.toggle('hidden');
}

var ERROR_CLASS_NAME = 'modal__input_error';
var FOCUSED_CLASS_NAME = 'modal__input_filled';

function initializeField(field) {
  var input = field.getElementsByTagName('input')[0];
  var fieldError = field.querySelector('.modal__error');
  input.value = '';
  field.classList.remove(ERROR_CLASS_NAME);
  field.classList.remove(FOCUSED_CLASS_NAME);
  fieldError.innerText = '';

  input.onfocus = function () {
    field.classList.add(FOCUSED_CLASS_NAME);
  };

  input.onblur = function () {
    if (!input.value) {
      field.classList.remove(FOCUSED_CLASS_NAME);
    }
  };

  return {
    getValue: function getValue() {
      return input.value;
    }
  };
}

var nameFieldUtils = initializeField(nameField);
var emailFieldUtils = initializeField(emailField);
openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;

function handleSubmit(event) {
  event.preventDefault();
  var data = {
    name: nameFieldUtils.getValue(),
    email: emailFieldUtils.getValue()
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString());
}

form.addEventListener('submit', handleSubmit);