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

// const travelTemplate = [
//   {
//     Destination: {
//       id: 1,
//       description: "Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",
//       name: "Chamonix",
//       pictures: [
//         {
//           src: "http://picsum.photos/300/200?r=0.0762563005163317",
//           description: "Chamonix parliament building"
//         }
//       ]
//     },

//     Offer: {
//       id: 1,
//       title: "Upgrade to a business class",
//       price: 120
//     },

//     OffersByType: {
//       type: "taxi",
//       offers: $Array < Offer > $,
//     },

//     Point: {
//       base_price: 1100,
//       date_from: "2019-07-10T22:55:56.845Z",
//       date_to: "2019-07-11T11:22:13.375Z",
//       destination: $Destination.id$,
//       id: "0",
//       offers: $Array < Offer.id > $,
//       type: "bus"
//     },

//     LocalPoint: {
//       base_price: 222,
//       date_from: "2019-07-10T22:55:56.845Z",
//       date_to: "2019-07-11T11:22:13.375Z",
//       destination: $Destination.id$,
//       offers: $Array < Offer.id > $,
//       type: "taxi"
//     }
//   },
// ];

function getRandomTravel() {
  return getRandomArrayElement(travelTemplate);
}

export { getRandomTravel };
