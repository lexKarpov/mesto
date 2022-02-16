function checkInputValidity(input, node, validobj){
  const errorMessage = node.querySelector(`.${input.name}-error`)
  if(input.validity.valid){
    input.classList.remove(validobj.errorClass)
    errorMessage.textContent = ''
  }else{
    input.classList.add(validobj.errorClass)
    errorMessage.textContent = input.validationMessage
  }
}

//КРАСКА КНОПКИ-------------------------------------------
function checkButtonValidity(node, validObj){
  const button = node.querySelector(validObj.submitButtonSelector)
  if(node.checkValidity()===true){
    button.removeAttribute('disabled')
    button.classList.remove(validObj.inputErrorClass)
  }else{
    button.setAttribute('disabled', '')
    button.classList.add(validObj.inputErrorClass)
  }
}
//--------------------------------------------------------

function enableValidation(validObj) {
  const formes= document.querySelectorAll(validObj.formSelector)
  formes.forEach(node => {
    checkButtonValidity(node, validObj)
    const inputs = node.querySelectorAll(validObj.inputSelector)
    inputs.forEach(input=>input.addEventListener('input', ()=> {
      checkInputValidity(input, node, validObj)
      checkButtonValidity(node, validObj)
    }))
  })
}
