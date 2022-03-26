export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }
  renderItems() {
    this._items.forEach(item => {
      this._elem = this._renderer(item);
    });
  }
  addItem(element) {
    this._container.prepend(element);
  }

}
