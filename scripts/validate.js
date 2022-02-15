
// const formSubmit = (evt, form)=>{
//   evt.preventDefault();
//   console.log(form)
//   if (form.checkValidity()) {
//     // form.addEventListener('submit', (evt)=>formSubmitHandlerText(evt, form))
//     // form.addEventListener('submit', (evt)=>formSubmitHandlerImage(evt, form))
//     // form.reset();
//   }
// }

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
  const button = node.querySelector('.popup__submit')
  if(node.checkValidity()===true){
    button.removeAttribute('disabled')
    button.classList.remove('popup__submit_disable')
  }else{
    button.setAttribute('disabled', '')
    button.classList.add('popup__submit_disable')
  }
}
//--------------------------------------------------------
function enableValidation() {
  const formes= document.querySelectorAll('.isvalid')
  formes.forEach(node => {
    // node.addEventListener('submit', (evt)=>{
    //     formSubmitHandlerImage(evt, node)
    // }
    // )
    // checkButtonValidity(node)
    const inputs = node.querySelectorAll('.popup__input')
    inputs.forEach(input=>input.addEventListener('input', ()=> {
      checkInputValidity(input, node)
      checkButtonValidity(node)
    }))
  })
}

// enableValidation()

