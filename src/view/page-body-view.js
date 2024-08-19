import { createElement } from '../render.js';

function createPageBodyTemplate() {
  return '<div class="page-body__container"></div>';
}

export default class PageBodyView {
  #element = null;

  get template() {
    return createPageBodyTemplate();
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
