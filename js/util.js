const isEscapeKey = (evt) => evt.key === 'Escape'; // Проверка нажатой клавиши

const ALERT_SHOW_TIME = 5000;

const errorMessage = () => {
  const alert = document.createElement('div');
  const errorText = document.createElement('p');
  errorText.textContent = 'Ошибка! :(';
  errorText.style.color = 'black';
  alert.append(errorText);
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';

  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey, errorMessage};
