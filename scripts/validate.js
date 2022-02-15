function checkInputValidity(input, node, {errorClass}){
  const errorMessage = node.querySelector(`.${input.name}-error`)
  if(input.validity.valid){
    input.classList.remove(errorClass)
    errorMessage.textContent = ''
  }else{
    input.classList.add(errorClass)
    errorMessage.textContent = input.validationMessage
  }
}

//КРАСКА КНОПКИ-------------------------------------------
function checkButtonValidity(node, {submitButtonSelector, inputErrorClass}){
  // console.log(node.checkValidity())
  const button = node.querySelector(submitButtonSelector)
  if(node.checkValidity()===true){
    button.removeAttribute('disabled')
    button.classList.remove(inputErrorClass)
    console.log('yes')
  }else{
    console.log('no')
    button.setAttribute('disabled', '')
    button.classList.add(inputErrorClass)
  }
}
//--------------------------------------------------------

function enableValidation({formSelector, inputSelector, ...rest}) {
  const formes= document.querySelectorAll(formSelector)
  formes.forEach(node => {
    checkButtonValidity(node, rest)
    const inputs = node.querySelectorAll(inputSelector)
    inputs.forEach(input=>input.addEventListener('input', ()=> {
      checkInputValidity(input, node, rest)
      checkButtonValidity(node, rest)
    }))
  })
}
