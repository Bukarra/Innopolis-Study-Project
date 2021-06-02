const openBtn = document.getElementById('btn-prize-open');
const popup = document.querySelector('#prize-popup');
const closeBtn = document.querySelector('#prize-popup__close');


function popupToggle() {
    popup.classList.toggle('hidden');
}

openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;