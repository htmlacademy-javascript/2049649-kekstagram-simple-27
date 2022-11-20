import {isEscapeKey} from './util.js';
import {imgUploadForm, pristine} from './user-form.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';

import {sendData} from './api.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const preview = document.querySelector('.img-upload__preview img');

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

function resetPage () {
  imgUploadForm.reset();
  resetScale();
  resetEffects();
  pristine.reset();
}

function openUserModal () {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  document.body.style.overflow = 'hidden';
}

function closeUserModal () {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  resetPage();
}

uploadFile.addEventListener('change', () => {
  openUserModal();
});

uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if(matches) {
    preview.src = URL.createObjectURL(file);
  }
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

const setUserFormSubmit = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          unblockSubmitButton();
          closeUserModal();
          resetPage();
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
