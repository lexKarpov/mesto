const formSubmit = (evt, form)=>{
  evt.preventDefault()
  console.log(form.checkValidity())
}

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

function checkButtonValidity(node){

  const button = node.querySelector('.popup__submit')
  console.log(button)
  if(node.checkValidity()===true){
    button.removeAttribute('disabled')
    button.classList.remove('popup__submit_disable')
  }else{
    button.setAttribute('disabled', '')
    button.classList.add('popup__submit_disable')
  }
}

function enableValidation() {
  const formes= document.querySelectorAll('.isvalid')

  formes.forEach(node => {
    const button = node.querySelector('.popup__submit')
    node.addEventListener('submit', (evt)=>{
      formSubmit(evt, node)

    }
    )
    checkButtonValidity(node)
    const inputs = node.querySelectorAll('.popup__input')
    inputs.forEach(input=>input.addEventListener('input', ()=> {
      checkInputValidity(input, node)
      checkButtonValidity(node)
    }))
  })
}


enableValidation()


