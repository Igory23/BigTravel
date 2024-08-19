import { createElement } from '../render.js';

function createSectionTripEventsTemplate() {
  return '<section class="trip-events"><h2 class="visually-hidden">Trip events</h2></section>';
}

export default class SectionTripEventsView {
  #element = null;

  get template() {
    return createSectionTripEventsTemplate();
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
