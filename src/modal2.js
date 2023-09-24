(() => {
  const refs = {
    openModalBtn: document.querySelector('[dat-modal-open]'),
    closeModalBtn: document.querySelector('[dat-modal-close]'),
    modal: document.querySelector('[dat-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
