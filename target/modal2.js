"use strict";

var fillNameField = document.querySelector('#form1 input[name="fill_name"]').parentNode;
var fillEmailField = document.querySelector('#form1 input[name="fill_email"]').parentNode;
var selectPlace = document.getElementById('select-place');
var formSubmit = document.getElementById('form1');
var ERROR_CLASSNAME = 'block08__input_error';
var FOCUSED_CLASSNAME = 'block08__input_filled';
var SELECTED_CLASSNAME = 'block08__select_selected';
var SELECTED_ERROR = 'block08__select-error';

function initializeFormField(field) {
  var input = field.getElementsByTagName('input')[0];
  var fieldError = field.querySelector('.block08__error');
  reset();

  function clearError() {
    field.classList.remove(ERROR_CLASSNAME);
    fieldError.innerText = '';
  }

  input.addEventListener('focus', function () {
    field.classList.add(FOCUSED_CLASSNAME);
  });
  input.addEventListener('blur', function () {
    if (!input.value) {
      field.classList.remove(FOCUSED_CLASSNAME);
    }
  });
  input.addEventListener('input', function () {
    clearError();
  });

  function reset() {
    input.value = '';
    field.classList.remove(FOCUSED_CLASSNAME);
    clearError();
  }

  return {
    addError: function addError(errorText) {
      field.classList.add(ERROR_CLASSNAME);
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

var fillNameFieldUtils = initializeFormField(fillNameField);
var fillEmailFieldUtils = initializeFormField(fillEmailField);
fillNameFieldUtils.focus();
selectPlace.addEventListener('change', function () {
  selectPlace.classList.add(SELECTED_CLASSNAME);
  selectPlace.classList.remove(SELECTED_ERROR);
});

function handleSubmitForm(event) {
  event.preventDefault();
  var nameValue = fillNameFieldUtils.getValue();
  var emailValue = fillEmailFieldUtils.getValue();

  if (!nameValue) {
    fillNameFieldUtils.addError('Необходимо указать имя');
    return;
  }

  if (!emailValue) {
    fillEmailFieldUtils.addError('Укажите email');
    return;
  }

  if (!/^[\w-]{2,16}@[\w-]{3,6}\.[a-z]{2,3}$/i.test(emailValue)) {
    fillEmailFieldUtils.addError('Невалидный email');
    return;
  }

  if (selectPlace.value === 'none') {
    selectPlace.classList.add(SELECTED_ERROR);
    selectPlace.classList.add('block08__error');
    return;
  }

  var data = {
    name: nameValue,
    email: emailValue,
    place: selectPlace.value
  };
  var url = new URL('https://inno-js.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString()).then(function (data) {
    return data.json();
  }).then(function (data) {
    fillNameFieldUtils.reset();
    fillEmailFieldUtils.reset();
    selectPlace.value = 'none';
    selectPlace.classList.remove(SELECTED_CLASSNAME);
  });
}

formSubmit.addEventListener('submit', handleSubmitForm);
//# sourceMappingURL=modal2.js.map