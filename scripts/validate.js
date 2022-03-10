export class FormValidator{
  constructor(validObj, form){
    this._form = form
    this._validObj = validObj
  }
  enableValidation() {
    this._checkButtonValidity()
    const inputs = this._form.querySelectorAll(this._validObj.inputSelector)
    inputs.forEach(input=>input.addEventListener('input', ()=> {
      this._checkInputValidity(input)
      this._checkButtonValidity()
      }))
    }

  _checkButtonValidity(){
    const button = this._form.querySelector(this._validObj.submitButtonSelector)
    if(this._form.checkValidity()===true){
      button.removeAttribute('disabled')
      button.classList.remove(this._validObj.inputErrorClass)
    }else{
      button.setAttribute('disabled', '')
      button.classList.add(this._validObj.inputErrorClass)
    }
  }  
  _checkInputValidity(input){
    const errorMessage = this._form.querySelector(`.${input.name}-error`)
    if(input.validity.valid){
      input.classList.remove(this._validObj.errorClass)
      errorMessage.textContent = ''
    }else{
      input.classList.add(this._validObj.errorClass)
      errorMessage.textContent = input.validationMessage
    }
  }
}

