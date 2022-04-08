export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }
  renderItems(data) {
    data.forEach(item => {
    this._elem = this._renderer(item);
    });
  }
  addItem(element) {
    this._container.prepend(element);
  }
}
