function checkInputValidity(input, node){
  const errorMessage = node.querySelector(`.${input.name}-error`)

  if(input.validity.valid){
    input.classList.remove('error-color')
    errorMessage.textContent = ''
  }else{
    input.classList.add('error-color')
    errorMessage.textContent = input.validationMessage
  }
}
//КРАСКА КНОПКИ-------------------------------------------
function checkButtonValidity(node){
  // console.log(node.checkValidity())
  const button = node.querySelector('.popup__submit')
  if(node.checkValidity()===true){
    button.removeAttribute('disabled')
    button.classList.remove('popup__submit_disable')
    console.log('yes')
  }else{
    console.log('no')
    button.setAttribute('disabled', '')
    button.classList.add('popup__submit_disable')
  }
}
//--------------------------------------------------------
function enableValidation() {
  const formes= document.querySelectorAll('.isvalid')
  formes.forEach(node => {
    checkButtonValidity(node)
    const inputs = node.querySelectorAll('.popup__input')
    inputs.forEach(input=>input.addEventListener('input', ()=> {
      checkInputValidity(input, node)
      checkButtonValidity(node)
    }))
  })
}
