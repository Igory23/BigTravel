import { createElement } from '../render.js';

function createEventsDetails() {
  return (`
  <section class="event__details"></section>
  `);
}

export default class EventsDetailsView {
  #element = null;
  get template() {
    return createEventsDetails();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
