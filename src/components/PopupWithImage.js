import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._img = this._element.querySelector('.popup__image')
    this._caption = this._element.querySelector('.popup__figcaption')
  }
  open({ name, link }) {
    this._img.src = link
    this._img.alt = name
    this._caption.textContent = name
    super.open()
  }
}
