"use strict";

$('#form1 input, #form1 select').on('focus', function () {
  var parent = $(this).closest('.block08__input');
  parent.addClass('block08__input_filled');
  parent.removeClass('block08__input_error');
  parent.find('.block08__error').html('');

  if (!parent.length) {
    parent = $(this).closest('.block08__select-wrap');
    parent.removeClass('block08__select-error');
    parent.find('.block08__error').html('');
  }

  if (!parent.length) {
    parent = $(this).closest('.block08__checkbox-wrap');
    parent.removeClass('block08__checkbox-error');
    parent.find('.block08__error').html('');
  }
});
$('#select-place').on('change', function () {
  $(this).addClass('block08__select_selected');
});
$('#form1 input, #form1 select').on('blur', function () {
  var parent = $(this).closest('.block08__input');

  if (!$(this).val()) {
    parent.removeClass('block08__input_filled');
  }

  if (!parent.length) {
    parent = $(this).closest('.block08__select-wrap');

    if (!$(this).val()) {
      parent.removeClass('block08__select_selected');
    }
  }
});
var url = 'http://study.xeol.ru/api/new_order';
$('#form1').on('submit', function (e) {
  e.preventDefault();
  $('.ajax-loader').show();
  var data = new FormData(document.getElementById('form1'));
  $.ajax({
    url: url,
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function success(msg) {
      $('.ajax-loader').hide();
      $.fancybox.open({
        src: '#query-popup',
        type: 'inline'
      });
      $('.query-popup__success-message').html(msg.success);
    },
    error: function error(msg) {
      showErrors(msg);
    },
    cache: false,
    contentType: false,
    processData: false
  });
  $('.block08__name').val('');
  $('.block08__input').removeClass('block08__input_filled');
  $('#select-place').val('none');
  $('.block08__select').removeClass('block08__select_selected');
  $('.block08__checkbox input').val('');
});

function showErrors(msg) {
  $('#form1 input, #form1 select').each(function () {
    for (var errors in msg.responseJSON.errors) {
      if (errors == $(this).attr('name')) {
        var parent = $(this).closest('.block08__input');
        parent.addClass('block08__input_error');

        if (!parent.length) {
          parent = $(this).closest('.block08__select-wrap');
          parent.addClass('block08__select-error');
        }

        if (!parent.length) {
          parent = $(this).closest('.block08__checkbox-wrap');
          parent.addClass('block08__checkbox-error');
        }

        for (var error in msg.responseJSON.errors[errors]) {
          parent.append('<p class="block08__error">' + msg.responseJSON.errors[errors][error] + '</p>');
        }
      }
    }
  });
}
//# sourceMappingURL=modal2.js.map