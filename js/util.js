//Написанная мною функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt(min, max) {
  if (isNaN(Number(min)) || isNaN(Number(max))) {
    return NaN;
  }

  if (min < 0 || max < 0) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min === max) {
    return NaN;
  }

  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomInt(1, 10);

//Функция для проверки максимальной длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('Meow', 150);

//Функции от Кекса, возвращающая случайное целое число из переданного диапазона включительно
function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Генерация случайного элемента в массиве
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {getRandomPositiveInteger, getRandomArrayElement};
