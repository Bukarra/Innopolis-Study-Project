"use strict";

var openBtn = document.getElementById('btn-prize-open');
var popup = document.querySelector('#prize-popup');
var closeBtn = document.querySelector('#prize-popup__close');
var nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
var emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;
var selectPrize = document.getElementById('choose-prize');
var form = document.getElementById('prize-form');

function popupToggle() {
  popup.classList.toggle('hidden');
}

var ERROR_CLASS_NAME = 'modal__input_error';
var FOCUSED_CLASS_NAME = 'modal__input_filled';
var SELECT_SELECTED = 'modal__select_selected';

function initializeField(field) {
  var input = field.getElementsByTagName('input')[0];
  var fieldError = field.querySelector('.modal__error');
  reset();

  function clearError() {
    field.classList.remove(FOCUSED_CLASS_NAME);
    fieldError.innerText = '';
  }

  input.addEventListener('focus', function () {
    field.classList.add(FOCUSED_CLASS_NAME);
  });
  input.addEventListener('blur', function () {
    if (!input.value) {
      field.classList.remove(FOCUSED_CLASS_NAME);
    }
  });
  input.addEventListener('input', function () {
    clearError();
  });

  function reset() {
    input.value = '';
    field.classList.remove(ERROR_CLASS_NAME);
    clearError();
  }

  return {
    addError: function addError(errorText) {
      field.classList.add(ERROR_CLASS_NAME);
      fieldError.innerText = errorText;
    },
    getValue: function getValue() {
      return input.value;
    },
    focus: function focus() {
      input.focus();
    },
    reset: reset
  };
}

var nameFieldUtils = initializeField(nameField);
var emailFieldUtils = initializeField(emailField);
openBtn.addEventListener('click', function () {
  popupToggle();
  nameFieldUtils.focus();
});
selectPrize.addEventListener('change', function () {
  selectPrize.classList.add('modal__select_selected');
});
closeBtn.onclick = popupToggle;

function handleSubmit(event) {
  event.preventDefault();
  var nameValue = nameFieldUtils.getValue();
  var emailValue = emailFieldUtils.getValue();

  if (!nameValue) {
    nameFieldUtils.addError('Необходимо указать имя');
    return;
  }

  if (!emailValue) {
    emailFieldUtils.addError('Укажите email');
    return;
  }

  if (!/^[\w-]{2,16}@[\w-]{3,6}\.[a-z]{2,3}$/i.test(emailValue)) {
    emailFieldUtils.addError('Невалидный email');
    return;
  }

  if (!selectPrize.value === 'none') {
    selectPrize.classList.add(ERROR_CLASS_NAME);
    return;
  }

  var data = {
    name: nameValue,
    email: emailValue,
    prize: selectPrize.value
  };
  var url = new URL('https://inno-js.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString()).then(function (data) {
    return data.json();
  }).then(function (data) {
    popupToggle();
    nameFieldUtils.reset();
    emailFieldUtils.reset();
  });
}

form.addEventListener('submit', handleSubmit);
//# sourceMappingURL=prize.js.map