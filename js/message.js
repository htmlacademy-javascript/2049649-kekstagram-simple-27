import {isEscapeKey} from './util.js';
import {onPopupEscKeydown} from './user-modal.js';

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
  document.addEventListener('keydown', onMessageEscKeydown);
  successButton.addEventListener('click', closeButtonClick);
  document.body.append(successMessage);
  document.body.style.overflow = 'hidden';
};


const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessage);
  document.addEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('keydown', onMessageEscKeydown);
  errorButton.addEventListener('click', closeButtonClick);
  document.body.style.overflow = 'hidden';
};

function closeMessage() {
  const messages =
    document.querySelector('.success') || document.querySelector('.error');
  messages.remove();
  document.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.body.style.overflow = 'auto';
  if (messages.classList.contains('error')) {
    document.addEventListener('keydown', onPopupEscKeydown);
  }
}

export {showSuccessMessage, showErrorMessage};
