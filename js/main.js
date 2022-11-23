import './miniatures.js';
import './user-modal.js';
import {getData} from './api.js';
import {getPhotoAll} from './miniatures.js';
import {getErrorMessage} from './util.js';
import {setUserFormSubmit} from './user-modal.js';

getData(
  (photos) => {
    getPhotoAll(photos);
  },
  () => {
    getErrorMessage('Не удалось получить данные');
  }
);

setUserFormSubmit();
