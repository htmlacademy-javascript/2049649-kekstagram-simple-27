import './miniatures.js';
import './user-modal.js';
import {getData} from './api.js';
import {getPhotoAll} from './miniatures.js';
import {errorMessage} from './util.js';
import {setUserFormSubmit} from './user-modal.js';

getData(
  (photos) => {
    getPhotoAll(photos);
  },
  () => {
    errorMessage('Не удалось получить данные');
  }
);

setUserFormSubmit();
