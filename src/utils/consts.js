const templateGallery = document.querySelector('.card-template').content
const popupTypeImage = document.querySelector('.popup_type_image')
const img = popupTypeImage.querySelector('.popup__image')
const caption = popupTypeImage.querySelector('.popup__figcaption')

export { templateGallery, img, caption, popupTypeImage }

export const validObj = {
  formSelector: '.isvalid',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__submit_disable',
  errorClass: 'error-color'
}
