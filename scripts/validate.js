const formSubmit = (evt, form)=>{
  evt.preventDefault()
  console.log(form.checkValidity())
}

function checkInputValidity(input){
  const errorMessage = document.querySelector(`.${input.name}-error`)
  console.log(errorMessage)
  if(input.validity.valid){
    input.classList.remove('error-color')
    errorMessage.textContent = ''
  }else{
    input.classList.add('error-color')
    errorMessage.textContent = 'asd'cd
  }
}

function enableValidation() {
  const formes= document.querySelectorAll('.isvalid')
  formes.forEach(node => {
    node.addEventListener('submit', (evt)=>formSubmit(evt, node))
  })
  const inputs = document.querySelectorAll('.popup__input')
  inputs.forEach(input=>input.addEventListener('input', ()=> checkInputValidity(input)))
}

enableValidation()


