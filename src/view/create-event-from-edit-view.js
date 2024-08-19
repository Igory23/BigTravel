import { createElement } from '../render.js';

function createEventFromEdit() {
  return (`
  <li class="trip-events__item"></li>
`);
}

export default class EventFromEditView {
  #element = null;
  get template() {
    return createEventFromEdit();
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

