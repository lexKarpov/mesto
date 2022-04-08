import Popup from "./Popup.js";
import {enableImageFormValidation, enablepopupConfirmDeleteFormValidation, userInfoExample} from "../pages/index.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunc) {
    super(popupSelector)
    this._submitFunc = submitFunc
    this._form = this._element.querySelector('.popup__admin')
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  open() {
    enableImageFormValidation.checkButtonValidity()
    enablepopupConfirmDeleteFormValidation.checkButtonValidity()
    super.open()
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }
  // popup__admin_confirm-delete-card
  setEventListeners() {
    if(this._form.classList.contains('popup__admin_confirm-delete-card')){
      // this._form.addEventListener('submit', (evt)=>this._submitFunc(evt, this._getInputValues()))
    }else{
      this._form.addEventListener('submit', (evt)=>this._submitFunc(evt, this._getInputValues()))
    }
    super.setEventListeners()
  }

  close() {
    this._form.reset()
    super.close()
  }
}
