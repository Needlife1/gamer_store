import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

try {
  const onlineForm = document.querySelector('.contacts__form-name');
  const contModal = document.querySelector('.backdrop');

  onlineForm.addEventListener('submit', createUser);

  function createUser(e) {
    e.preventDefault();

    let user = {
      name: e.target.elements.name.value,
      email: e.target.elements.mail.value,
      message: e.target.elements.comment.value,
    };

    const { name, email, message } = user;

    if (user.email.length < 8) {
      Notify.failure('Not enough characters in mail!');
      return;
    }
    toAddUser(name, email, message);

    onlineForm.reset();
  }

  function toAddUser(user) {
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .post(
        'https://64f0b29f8a8b66ecf77a068e.mockapi.io/api/shop_customers',
        options
      )
      .then(response => {
        console.log(response);
        contModal.classList.remove('is-hidden');
      })
      .catch(error => {
        Notify.failure('Something went wrong =(. Try later!');
        console.log(error);
      });
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

export { createUser, toAddUser };

// =====================Закриття модального вікна===================================

// const modalCloseBtn = document.querySelector('.dismiss');

// modalCloseBtn.addEventListener('click', closeModal);

// function closeModal() {
//   contModal.classList.add('is-hidden');
// }
