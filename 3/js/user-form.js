const imgUploadForm = document.querySelector('.img-upload__form'); // Поле для загрузки нового изображения на сайт

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

export {imgUploadForm, pristine};
