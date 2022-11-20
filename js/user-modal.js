import {isEscapeKey} from './util.js';
import {imgUploadForm, pristine} from './user-form.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';

import {sendData} from './api.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

const uploadFile = document.querySelector('#upload-file'); // Поле для загрузки изображения
const uploadCancel = document.querySelector('#upload-cancel'); // Кнопка для закрытия формы редактирования изображения
const imgUploadOverlay = document.querySelector('.img-upload__overlay'); // Форма редактирования изображения

const uploadSubmit = imgUploadForm.querySelector('#upload-submit');

//Удаление обработчика закрытия окна по нажатию на Esc
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  imgUploadForm.reset();
  resetScale();
  resetEffects();
  pristine.reset();
}

uploadFile.addEventListener('change', () => {
  openUserModal();
});

uploadCancel.addEventListener('click', () => {
  closeUserModal();
});

const blockSubmitButton = () => {
  uploadSubmit.disabled = true;
  uploadSubmit.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  uploadSubmit.disabled = false;
  uploadSubmit.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        evt, () => {
          unblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target)
      );
    }
  });
};

export {setUserFormSubmit};
