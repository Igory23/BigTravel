import { createElement } from '../render.js';

function createEditForm() {
  return (`
  <form class="event event--edit" action="#" method="post"></form>
`);
}

export default class EditFormView {
  #element = null;
  get template() {
    return createEditForm();
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

