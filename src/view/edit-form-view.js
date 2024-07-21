import { createElement } from '../render.js';

function createEditForm() {
  return (`
  <form class="event event--edit" action="#" method="post"></form>
`);
}

export default class EditFormView {
  getTemplate() {
    return createEditForm();
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

