import { createElement } from '../render.js';

function createEventFromEdit() {
  return (`
  <li class="trip-events__item"></li>
`);
}

export default class EventFromEditView {
  getTemplate() {
    return createEventFromEdit();
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

