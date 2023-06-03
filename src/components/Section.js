/** класс Section отвечает за отрисовку элементов на странице */
export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  /** метод, который отвечает за отрисовку всех элементов */
  renderItems(renderedItems) {
    renderedItems.forEach(item => {
      this._renderer(item);
    });
  }

  /**  метод, который принимает DOM-элемент и добавляет его в контейнер */
  addItemPrepend(element) {
    this._container.prepend(element);
  }

  addItemAppend(element) {
    this._container.append(element);
  }
}
