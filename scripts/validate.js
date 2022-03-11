export class Validate {
  constructor(validObj, form) {
    this._form = form
    this._validObj = validObj
    this._button = this._form.querySelector(this._validObj.submitButtonSelector)
  }
  enableValidation() {
    this.checkButtonValidity()
    const inputs = this._form.querySelectorAll(this._validObj.inputSelector)
    inputs.forEach(input => input.addEventListener('input', () => {
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
    const errorMessage = this._form.querySelector(`.${input.name}-error`)
    if (input.validity.valid) {
      input.classList.remove(this._validObj.errorClass)
      errorMessage.textContent = ''
    } else {
      input.classList.add(this._validObj.errorClass)
      errorMessage.textContent = input.validationMessage
    }
  }
}

