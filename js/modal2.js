const fillNameField = document.querySelector('#form1 input[name="fill_name"]').parentNode;
const fillEmailField = document.querySelector('#form1 input[name="fill_email"]').parentNode;
const selectPlace = document.getElementById('select-place');
const formSubmit = document.getElementById('form1');

const ERROR_CLASSNAME = 'block08__input_error';
const FOCUSED_CLASSNAME = 'block08__input_filled';
const SELECTED_CLASSNAME = 'block08__select_selected';
const SELECTED_ERROR = 'block08__select-error';

function initializeFormField(field) {
    const input = field.getElementsByTagName('input')[0];
    const fieldError = field.querySelector('.block08__error');

    reset();
    
    function clearError() {
        field.classList.remove(ERROR_CLASSNAME);
        fieldError.innerText = '';
    }

    input.addEventListener('focus', function() {
        field.classList.add(FOCUSED_CLASSNAME);
    })

    input.addEventListener('blur', () => {
        if(!input.value) {
        field.classList.remove(FOCUSED_CLASSNAME);
        }
    })

    input.addEventListener('input', () => {
        clearError();
    })

    function reset() {
        input.value = '';
        field.classList.remove(FOCUSED_CLASSNAME);
        clearError();
    }

    return {
        addError(errorText) {
            field.classList.add(ERROR_CLASSNAME);
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

const fillNameFieldUtils = initializeFormField(fillNameField);
const fillEmailFieldUtils = initializeFormField(fillEmailField);

fillNameFieldUtils.focus();

selectPlace.addEventListener('change', () => {
    selectPlace.classList.add(SELECTED_CLASSNAME);
    selectPlace.classList.remove(SELECTED_ERROR);
});

function handleSubmitForm(event) {
    event.preventDefault();
    const nameValue = fillNameFieldUtils.getValue();
    const emailValue = fillEmailFieldUtils.getValue();

    if(!nameValue) {
        fillNameFieldUtils.addError('Необходимо указать имя');
        return;
    }

    if(!emailValue) {
        fillEmailFieldUtils.addError('Укажите email');
        return;
    }

    if(!/^[\w-]{2,16}@[\w-]{3,6}\.[a-z]{2,3}$/i.test(emailValue)) {
        fillEmailFieldUtils.addError('Невалидный email');
        return;
    }

    if(selectPlace.value === 'none') {
        selectPlace.classList.add(SELECTED_ERROR);
        selectPlace.classList.add('block08__error');
        return;
    }

    const data = {
        name: nameValue,
        email: emailValue,
        place: selectPlace.value
    };
    
    const url = new URL('https://inno-js.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();

    fetch(url.toString())
    .then(data => data.json())
    .then((data) => {
        fillNameFieldUtils.reset();
        fillEmailFieldUtils.reset();
        selectPlace.value = 'none';
        selectPlace.classList.remove(SELECTED_CLASSNAME);
    });

}

formSubmit.addEventListener('submit', handleSubmitForm);