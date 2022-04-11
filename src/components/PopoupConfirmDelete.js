import Popup from "./Popup.js";

export default class PopupConfirmDelete extends Popup {
  constructor(popupSelector, submitFunc) {
    super(popupSelector)
    this._form = this._element.querySelector('.popup__admin')
    this._submitFunc = submitFunc
  }

  open(obj) {
    this._cardObj = obj
    super.open()
  }
  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt)=>this._submitFunc(evt, this._cardObj))
  }

  close() {
    super.close()
  }
}



