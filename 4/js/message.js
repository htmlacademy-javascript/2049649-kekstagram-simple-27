import {isEscapeKey} from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successButton = successMessageTemplate.querySelector('.success__button');
const errorButton = errorMessageTemplate.querySelector('.error__button');

const onMessageEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onOverlayClick = (evt) => {
  if (!evt.target.classList.contains('modal-message')) {
    closeMessage();
  }
};

const closeButtonClick = () => {
  closeMessage();
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeydown, true);
  successButton.addEventListener('click', closeButtonClick);
  document.body.append(successMessage);
  document.body.style.overflow = 'hidden';
};


const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessage);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeydown, true);
  errorButton.addEventListener('click', closeButtonClick);
  document.body.style.overflow = 'hidden';
};

function closeMessage() {
  const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('click',onOverlayClick);
  document.removeEventListener('keydown', onMessageEscKeydown, true);
  document.body.style.overflow = 'auto';
}

export {showSuccessMessage, showErrorMessage};
