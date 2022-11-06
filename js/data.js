import {getRandomPositiveInteger} from './util.js';

const DESCRIPTION = 'Какое-то красноречивое описание для фотографии';

const PICTURES = {
  MIN: 1,
  MAX: 25,
};

const LIKE = {
  MIN: 15,
  MAX: 200,
};

const COMMENTS = {
  MIN: 0,
  MAX: 200,
};

const RANDOM_OBJECTS = 25; // 25 сгенерированных объектов;

const generatePhotoDesc = () => {
  const photoId = getRandomPositiveInteger (PICTURES.MIN, PICTURES.MAX);
  const urlText = `photos/${getRandomPositiveInteger(PICTURES.MIN, PICTURES.MAX)}.jpg`;
  const likesValue = getRandomPositiveInteger (LIKE.MIN, LIKE.MAX);
  const totalComments = getRandomPositiveInteger (COMMENTS.MIN, COMMENTS.MAX);

  return {
    id: photoId,
    url: urlText,
    description: DESCRIPTION,
    likes: likesValue,
    comments: totalComments,
  };
};

const createPhotoDescription = () => Array.from({length:RANDOM_OBJECTS}, generatePhotoDesc);

export {createPhotoDescription};
