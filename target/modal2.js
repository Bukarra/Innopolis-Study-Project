"use strict";

// const fillNameField = document.querySelector('#form1 input[name="name"]').parentNode;
// const fillEmailField = document.querySelector('#form1 input[name="email"]').parentNode;
// const selectPlace = document.getElementById('select-place');
// const formSubmit = document.getElementById('form1');
// const ERROR_CLASSNAME = 'block08__input_error';
// const FOCUSED_CLASSNAME = 'block08__input_filled';
// const SELECTED_CLASSNAME = 'block08__select_selected';
// const SELECTED_ERROR = 'block08__select-error';
// function initializeFormField(field) {
//     const input = field.getElementsByTagName('input')[0];
//     const fieldError = field.querySelector('.block08__error');
//     reset();
//     function clearError() {
//         field.classList.remove(ERROR_CLASSNAME);
//         fieldError.innerText = '';
//     }
//     input.addEventListener('focus', function () {
//         field.classList.add(FOCUSED_CLASSNAME);
//     })
//     input.addEventListener('blur', () => {
//         if (!input.value) {
//             field.classList.remove(FOCUSED_CLASSNAME);
//         }
//     })
//     input.addEventListener('input', () => {
//         clearError();
//     })
//     function reset() {
//         input.value = '';
//         field.classList.remove(FOCUSED_CLASSNAME);
//         clearError();
//     }
//     return {
//         addError(errorText) {
//             field.classList.add(ERROR_CLASSNAME);
//             fieldError.innerText = errorText;
//         },
//         getValue() {
//             return input.value
//         },
//         focus() {
//             input.focus()
//         },
//         reset: reset
//     }
// }
// const fillNameFieldUtils = initializeFormField(fillNameField);
// const fillEmailFieldUtils = initializeFormField(fillEmailField);
// selectPlace.addEventListener('change', () => {
//     selectPlace.classList.add(SELECTED_CLASSNAME);
//     selectPlace.classList.remove(SELECTED_ERROR);
// });
// function handleSubmitForm(event) {
//     event.preventDefault();
//     const nameValue = fillNameFieldUtils.getValue();
//     const emailValue = fillEmailFieldUtils.getValue();
//     if (!nameValue) {
//         fillNameFieldUtils.addError('Необходимо указать имя');
//         return;
//     }
//     if (!emailValue) {
//         fillEmailFieldUtils.addError('Укажите email');
//         return;
//     }
//     if (!/^[\w-]{2,16}@[\w-]{3,6}\.[a-z]{2,3}$/i.test(emailValue)) {
//         fillEmailFieldUtils.addError('Невалидный email');
//         return;
//     }
//     if (selectPlace.value === 'none') {
//         selectPlace.classList.add(SELECTED_ERROR);
//         selectPlace.classList.add('block08__error');
//         return;
//     }
var data = new FormData(document.getElementById('form1'));
var dataToJSON = JSON.stringify(Object.fromEntries(data));
var url = 'http://study.xeol.ru/api/new_order';
$('#form1').on('submit', function (e) {
  e.preventDefault();
  $.ajax({
    url: url,
    type: 'post',
    data: dataToJSON,
    dataType: 'json',
    success: function success(msg) {
      console.log(msg);
    },
    error: function error(msg) {
      showErrors(msg);
    },
    cache: false,
    contentType: false,
    processData: false
  });
});

function showErrors(msg) {
  $('#form1 input, #form1 select').each(function () {
    for (var errors in msg.responseJSON.errors) {
      if (errors == $(this).attr('name')) {
        var parent = $(this).closest('.block08__input');
        parent.addClass('block08__input_error'); // // if (!parent.length) {
        // //     parent = $(this).closest('.block08__select-wrap');
        // //     parent.addClass('block08__select-error');
        // // }
        // // if (!parent.length) {
        // //     parent = $(this).closest('.block08__checkbox');
        // //     parent.addClass('block08__select-error');
        // }

        for (var error in msg.responseJSON.errors[errors]) {
          parent.append('<p class="block08__error">' + msg.responseJSON.errors[errors][error] + '</p>');
        }
      }
    }
  });
} // fetch(url, {
//       method: 'POST',
//       cache: 'no-cache',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
// })
// .then((data) => {
//     fillNameFieldUtils.reset();
//     fillEmailFieldUtils.reset();
//     selectPlace.value = 'none';
//     selectPlace.classList.remove(SELECTED_CLASSNAME);
// });
// }
// formSubmit.addEventListener('submit', handleSubmitForm);
//# sourceMappingURL=modal2.js.map