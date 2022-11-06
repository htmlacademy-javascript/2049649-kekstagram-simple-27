import {createPhotoDescription} from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictures = pictureTemplate.querySelector('.picture');

const usersPictures = document.querySelector('.pictures');
const createFragment = document.createDocumentFragment();

const createPhotoAll = createPhotoDescription();

createPhotoAll.forEach(({url, likes, comments}) => {
  const picture = pictures.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments;

  createFragment.append(picture);
  return picture;
});

usersPictures.append(createFragment);
