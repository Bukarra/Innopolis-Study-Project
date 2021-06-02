"use strict";

var openBtn = document.getElementById('btn-prize-open');
var popup = document.querySelector('#prize-popup');
var closeBtn = document.querySelector('#prize-popup__close');

function popupToggle() {
  popup.classList.toggle('hidden');
}

openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;