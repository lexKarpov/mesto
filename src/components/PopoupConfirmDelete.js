import PopupWithForm from "./PopupWithForm.js";



export default class PopupConfirmDelete extends PopupWithForm {
  constructor(popupSelector, submitFunc) {
    super(popupSelector)
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


