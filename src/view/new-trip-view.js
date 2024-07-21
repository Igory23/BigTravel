import { createElement } from '../render.js';
import { humanizeEventDate, humanizeYearMonthDateEvents, humanizeEventDateAndTime, humanizeEventTime } from '../utils.js';

function createNewWaypoint(travel) {
  const { price, eventEnd, eventStart, options, destination } = travel;

  const evtDayStart = humanizeEventDate(eventStart);
  const evtDateStartComputer = humanizeYearMonthDateEvents(eventStart);
  const evtDateStart = humanizeEventDateAndTime(eventStart);
  const evtDateEnd = humanizeEventDateAndTime(eventEnd);
  const evtTimeStart = humanizeEventTime(eventStart);
  const evtTimeEnd = humanizeEventTime(eventEnd);

  return (`
    <li class="trip-events__item">
     <div class="event">
       <time class="event__date" datetime="${evtDateStartComputer}">${evtDayStart}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="${destination.img}" alt="Event type icon">
        </div>
        <h3 class="event__title">${destination.eventTitle}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${evtDateStart}">${evtTimeStart}</time>
            &mdash;
            <time class="event__end-time" datetime="${evtDateEnd}">${evtTimeEnd}</time>
          </p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">${options.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${options.optionsPrise}</span>
          </li>
        </ul>
        <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
              </button>
        </li> 
     `);
}

export default class NewTripView {
  constructor({travel}) {
    this.travel = travel;
  }

  getTemplate() {
    return createNewWaypoint(this.travel);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
