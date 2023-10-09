import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  product: document.querySelector('.order-text'),
  priсу: document.querySelector('.order-sale-done'),
  takeOrderForm: document.querySelector('.order__cont-form'),
  backdrop: document.querySelector('.backdrop'),
  modalCloseBtn: document.querySelector('.dismiss'),
  jsPrice: document.querySelector('.js-price'),
};

refs.takeOrderForm.addEventListener('submit', addToBasket);
const LOCAL_STORAGE_KEY = 'product';

function addToBasket(e) {
  e.preventDefault();

  const quantity = +e.target.elements.quantity.value;

  const shopping = {
    name: e.target.elements.name.value,
    email: e.target.elements.mail.value,
    color: e.target.elements.color.value,
    quantity: quantity,
    payment: e.target.elements.payment.value,
    message: e.target.elements.message.value,
    productName: refs.product.textContent,
    priсу: (parseFloat(refs.priсу.textContent) * quantity).toFixed(2),
  };

  if (
    shopping.color === 'Color Option' ||
    Number.isNaN(shopping.quantity) ||
    shopping.payment === 'Payment'
  ) {
    Notify.failure('Fill in all the fields.');
    return;
  }

  addToLocalStorage(shopping);

  refs.backdrop.classList.remove('is-hidden');

  refs.jsPrice.textContent = shopping.priсу + ' USD';

  clearForm();
}

function addToLocalStorage(shopping) {
  try {
    const shoppingJSON = JSON.stringify(shopping);
    localStorage.setItem(LOCAL_STORAGE_KEY, shoppingJSON);
  } catch (error) {
    console.log(error);
  }
}

function clearForm() {
  refs.takeOrderForm.reset();
}

// --------------------modalCloseBtn------------------------------

refs.modalCloseBtn.addEventListener('click', closeModal);

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
}
