const openBtn = document.getElementById('btn-prize-open');
const popup = document.querySelector('#prize-popup');
const closeBtn = document.querySelector('#prize-popup__close');
const nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
const emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;
const form = document.getElementById('prize-form');

function popupToggle() {
    popup.classList.toggle('hidden');
}

const ERROR_CLASS_NAME = 'modal__input_error';
const FOCUSED_CLASS_NAME = 'modal__input_filled';

function initializeField(field) {
    const input = field.getElementsByTagName('input')[0];
    const fieldError = field.querySelector('.modal__error');

    input.value = '';
    field.classList.remove(ERROR_CLASS_NAME);
    field.classList.remove(FOCUSED_CLASS_NAME);
    fieldError.innerText = '';

    input.onfocus = function() {
        field.classList.add(FOCUSED_CLASS_NAME);
    }

    input.onblur = () => {
        if(!input.value) {
        field.classList.remove(FOCUSED_CLASS_NAME);
        }
    }

    return {
        getValue() {
            return input.value
        }
    }
}

const nameFieldUtils = initializeField(nameField);
const emailFieldUtils = initializeField(emailField);

openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;

function handleSubmit(event) {
    event.preventDefault();
    const data = {
        name: nameFieldUtils.getValue(),
        email: emailFieldUtils.getValue(),
    };
    
    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();

    fetch(url.toString());

}

form.addEventListener('submit', handleSubmit);