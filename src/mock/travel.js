import { CITIES, MEANS_OF_TRANSPORT, REVIEWS, OFFERS, EVENT_TITLE, ICON_TYPE } from '../const.js';
import { getRandomArrayElement, getRandomPrice, getRandomArrayIcon } from '../utils.js';

const travelTemplate = [
  {
    destination: {
      town: getRandomArrayElement(CITIES),
      cityDescription: getRandomArrayElement(REVIEWS),
      img: getRandomArrayIcon(ICON_TYPE),
      eventTitle: getRandomArrayElement(EVENT_TITLE),
    },
    options: {
      type: getRandomArrayElement(MEANS_OF_TRANSPORT),
      title: getRandomArrayElement(OFFERS),
      optionsPrise: getRandomPrice(50, 400),
    },
    eventStart: new Date('2023-02-04T18:00'),
    eventEnd: new Date('2023-02-04T18:25'),
    price: getRandomPrice(100, 500),
  },

  {
    destination: {
      town: getRandomArrayElement(CITIES),
      cityDescription: getRandomArrayElement(REVIEWS),
      img: getRandomArrayIcon(ICON_TYPE),
    },
    options: {
      type: getRandomArrayElement(MEANS_OF_TRANSPORT),
      title: getRandomArrayElement(OFFERS),
      optionsPrise: getRandomPrice(50, 400),
    },
    eventStart: new Date('2023-02-10T13:10'),
    eventEnd: new Date('2023-02-10T13:50'),
    price: getRandomPrice(100, 500),
  },

  {
    destination: {
      town: getRandomArrayElement(CITIES),
      cityDescription: getRandomArrayElement(REVIEWS),
      img: getRandomArrayIcon(ICON_TYPE),
    },
    options: {
      type: getRandomArrayElement(MEANS_OF_TRANSPORT),
      title: getRandomArrayElement(OFFERS),
      optionsPrise: getRandomPrice(50, 400),
    },
    eventStart: new Date('2023-02-14T09:00'),
    eventEnd: new Date('2023-02-14T9:35'),
    price: getRandomPrice(100, 500),
  },

  {
    destination: {
      town: getRandomArrayElement(CITIES),
      cityDescription: getRandomArrayElement(REVIEWS),
      img: getRandomArrayIcon(ICON_TYPE),
    },
    options: {
      type: getRandomArrayElement(MEANS_OF_TRANSPORT),
      title: getRandomArrayElement(OFFERS),
      optionsPrise: getRandomPrice(50, 400),
    },
    eventStart: new Date('2023-03-17T017:00'),
    eventEnd: new Date('2023-03-17T17:35'),
    price: getRandomPrice(100, 500),
  },

  {
    destination: {
      town: getRandomArrayElement(CITIES),
      cityDescription: getRandomArrayElement(REVIEWS),
      img: getRandomArrayIcon(ICON_TYPE),
    },
    options: {
      type: getRandomArrayElement(MEANS_OF_TRANSPORT),
      title: getRandomArrayElement(OFFERS),
      optionsPrise: getRandomPrice(50, 400),
    },
    eventStart: new Date('2023-03-19T07:00'),
    eventEnd: new Date('2023-03-19T07:35'),
    price: getRandomPrice(100, 500),
  },
];

function getRandomTravel() {
  return getRandomArrayElement(travelTemplate);
}

export { getRandomTravel, };
