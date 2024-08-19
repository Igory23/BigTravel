import { createElement } from '../render.js';

function createMainTemplate() {
  return '<main class="page-body__page-main  page-main"></main>';
}

export default class MainBoardView {
  #element = null;

  get template() {
    return createMainTemplate();
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
