import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunc) {
    super(popupSelector)
    this._submitFunc = submitFunc
    this._form = this._element.querySelector('.popup__admin')
  }
  open() {
    super.open()
  }
  _getInputValues() {
    this._inputs = this._form.querySelectorAll('.popup__input')
    console.log(this._inputs);
    return this._inputs
  }
  setEventListeners() {
    this._form.addEventListener('submit', this._submitFunc)
    super.setEventListeners()
  }

  close() {
    this._form.reset()
    super.close()
  }
}
