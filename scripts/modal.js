const saveButton = document.querySelector('.save-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');

saveButton.addEventListener('click', () => {
  modal.showModal();
});

closeButton.addEventListener('click', () => {
  modal.close();
});
