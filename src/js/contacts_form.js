import { Notify } from 'notiflix/build/notiflix-notify-aio';
var _ = require('lodash');

const nameInput = document.querySelector('.name_contactInput');
const backdrop = document.querySelector('.backdrop');

try {
  nameInput.addEventListener('input', onNameinput);

  function onNameinput(e) {
    const input = e.target;
    const inputNameValue = getInputNameValue(input);

    if (!inputNameValue) {
      input.value = '';
    }
  }

  function getInputNameValue(input) {
    const sanitizedValue = input.value.replace(/[^a-zA-Zа-яА-ЯїєіґҐёЁ']/g, '');
    if (input.value !== sanitizedValue) {
      input.value = sanitizedValue;
    }
    return sanitizedValue;
  }

  nameInput.addEventListener('keydown', _.throttle(numberCheck, 1500));

  function numberCheck(e) {
    if (e.key >= '0' && e.key <= '9') {
      Notify.failure('You need to enter letters!!!');
      e.preventDefault();
    }
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
