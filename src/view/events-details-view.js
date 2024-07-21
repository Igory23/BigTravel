import { createElement } from '../render.js';

function createEventsDetails() {
  return (`
  <section class="event__details"></section>
  `);
}

export default class EventsDetailsView {
  getTemplate() {
    return createEventsDetails();
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
