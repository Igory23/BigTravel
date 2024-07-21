import { createElement } from '../render.js';

function createMainTemplate() {
  return '<main class="page-body__page-main  page-main"></main>';
}

export default class MainBoardView {
  getTemplate() {
    return createMainTemplate();
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
