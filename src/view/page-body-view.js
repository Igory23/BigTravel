import { createElement } from '../render.js';

function createPageBodyTemplate() {
  return '<div class="page-body__container"></div>';
}

export default class PageBodyView {
  getTemplate() {
    return createPageBodyTemplate();
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
