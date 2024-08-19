import { createElement } from '../render.js';

function createBodyTravelTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class TripEventBodyView {
  #element = null;

  get template() {
    return createBodyTravelTemplate();
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
