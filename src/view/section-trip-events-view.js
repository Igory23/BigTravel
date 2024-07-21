import { createElement } from '../render.js';

function createSectionTripEventsTemplate() {
  return '<section class="trip-events"><h2 class="visually-hidden">Trip events</h2></section>';
}

export default class SectionTripEventsView {
  getTemplate() {
    return createSectionTripEventsTemplate();
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
