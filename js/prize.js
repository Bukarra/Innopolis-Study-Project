const openBtn = document.getElementById('btn-prize-open');
const popup = document.querySelector('#prize-popup');
const closeBtn = document.querySelector('#prize-popup__close');
const nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
const emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;
const selectPrize = document.getElementById('choose-prize');
const form = document.getElementById('prize-form');

function popupToggle() {
    popup.classList.toggle('hidden');
}

const ERROR_CLASS_NAME = 'modal__input_error';
const FOCUSED_CLASS_NAME = 'modal__input_filled';
const SELECT_SELECTED = 'modal__select_selected';

function initializeField(field) {
    const input = field.getElementsByTagName('input')[0];
    const fieldError = field.querySelector('.modal__error');

    reset();
    
    function clearError() {
        field.classList.remove(FOCUSED_CLASS_NAME);
        fieldError.innerText = '';
    }

    input.addEventListener('focus', function() {
        field.classList.add(FOCUSED_CLASS_NAME);
    })

    input.addEventListener('blur', () => {
        if(!input.value) {
        field.classList.remove(FOCUSED_CLASS_NAME);
        }
    })

    input.addEventListener('input', () => {
        clearError();
    })

    function reset() {
        input.value = '';
        field.classList.remove(ERROR_CLASS_NAME);
        clearError();
    }

    return {
        addError(errorText) {
            field.classList.add(ERROR_CLASS_NAME);
            fieldError.innerText = errorText;
        },
        getValue() {
            return input.value
        },
        focus() {
            input.focus()
        },
        reset: reset
    }
}

const nameFieldUtils = initializeField(nameField);
const emailFieldUtils = initializeField(emailField);

openBtn.addEventListener('click', () => {
    popupToggle();
    nameFieldUtils.focus();
});

selectPrize.addEventListener('change', () => {
    selectPrize.classList.add('modal__select_selected');
});

closeBtn.onclick = popupToggle;

function handleSubmit(event) {
    event.preventDefault();
    const nameValue = nameFieldUtils.getValue();
    const emailValue = emailFieldUtils.getValue();

    if(!nameValue) {
        nameFieldUtils.addError('Необходимо указать имя');
        return;
    }

    if(!emailValue) {
        emailFieldUtils.addError('Укажите email');
        return;
    }

    if(!/^[\w-]{2,16}@[\w-]{3,6}\.[a-z]{2,3}$/i.test(emailValue)) {
        emailFieldUtils.addError('Невалидный email');
        return;
    }

    if(!selectPrize.value === 'none') {
        selectPrize.classList.add(ERROR_CLASS_NAME);
        return;
    }

    const data = {
        name: nameValue,
        email: emailValue,
        prize: selectPrize.value
    };
    
    const url = new URL('https://inno-js.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();

    fetch(url.toString())
    .then(data => data.json())
    .then((data) => {
        popupToggle();
        nameFieldUtils.reset();
        emailFieldUtils.reset();
    });

}

form.addEventListener('submit', handleSubmit);