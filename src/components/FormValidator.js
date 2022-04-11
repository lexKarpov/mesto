export class FormValidator {
  constructor(validObj, form) {
    this._form = form
    this._validObj = validObj
    this._button = this._form.querySelector(this._validObj.submitButtonSelector)
  }
  enableValidation() {
    this.checkButtonValidity()
    this._inputList = this._form.querySelectorAll(this._validObj.inputSelector)
    // this._inputList.forEach(input => input.addEventListener('input', () => {
    //   this._checkInputValidity(input)
    //   this.checkButtonValidity()
    // }))
    this._setEventListener()
  }
  _setEventListener(){
    this._inputList.forEach(input => input.addEventListener('input', () => {
      this._checkInputValidity(input)
      this.checkButtonValidity()
    }))
  }
  checkButtonValidity() {
    if (this._form.checkValidity()) {
      this._button.removeAttribute('disabled')
      this._button.classList.remove(this._validObj.inputErrorClass)
    } else {
      this._button.setAttribute('disabled', '')
      this._button.classList.add(this._validObj.inputErrorClass)
    }
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }
  _showInputError(input, errorMessage) {
    const errorElement = this._form.querySelector(`.${input.name}-error`);
    input.classList.add(this._validObj.errorClass);
    errorElement.textContent = errorMessage;
  }
  blockButton(){
    this._button.setAttribute('disabled', '')
    this._button.classList.add(this._validObj.inputErrorClass)
  }
  _hideInputError(input) {
    const errorElement = this._form.querySelector(`.${input.name}-error`);
    input.classList.remove(this._validObj.errorClass);
    errorElement.textContent = '';
  }
  clearError(){
    this._inputList.forEach(el => this._hideInputError(el))
  }
}

