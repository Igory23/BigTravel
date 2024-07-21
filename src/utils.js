import dayjs from 'dayjs';


function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const getRandomPrice = (min, max) => Math.floor(Math.random() * (max - min) + min);


function humanizeEventDate(dueDate) {
  return dueDate ? dayjs(dueDate).format('D MMM') : '';
}

function humanizeYearMonthDateEvents (dueDate) {
  return dueDate ? dayjs(dueDate).format('YYYY-MM-DD') : '';
}

function humanizeEventDateAndTime (dueDate) {
  return dueDate ? dayjs(dueDate).format('YYYY-MM-DDTHH:MM') : '';
}

function humanizeEventTime (dueDate) {
  return dueDate ? dayjs(dueDate).format('HH:MM') : '';
}

function getRandomArrayIcon(items) {
  const item = items[Math.floor(Math.random() * items.length)];
  return `img/icons/${item}.png`;
}

export {
  getRandomArrayElement,
  getRandomPrice,
  humanizeEventDate,
  humanizeYearMonthDateEvents,
  humanizeEventDateAndTime,
  humanizeEventTime,
  getRandomArrayIcon,
};


