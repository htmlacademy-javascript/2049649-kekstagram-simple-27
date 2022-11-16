import {isEscapeKey} from './util.js';
import {imgUploadForm, pristine} from './user-form.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';

const uploadFile = document.querySelector('#upload-file'); // Поле для загрузки изображения
const uploadCancel = document.querySelector('#upload-cancel'); // Кнопка для закрытия формы редактирования изображения
const imgUploadOverlay = document.querySelector('.img-upload__overlay'); // Форма редактирования изображения

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
}

uploadFile.addEventListener('change', () => {
  openUserModal();
});

uploadCancel.addEventListener('click', () => {
  closeUserModal();
});

imgUploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});