import { FormValidator } from './FormValidator.js'
import { initialCards } from './array.js'
import { validObj } from './consts.js'
import { Card } from './Card.js'
import { openPopup } from './utils.js'


const popupOpenTextRedactor = document.querySelector('.profile__redaction-button');
//ПОПАПЫ-------------------------------------------------------------------
const popupTypeTextForm = document.querySelector('.popup_type_text-form')
const popupTypeImageForm = document.querySelector('.popup_type_image-form')

//-------------------------------------------------------------------------

const templateSelector = '.card-template'

//ФОРМА--------------------------------------------------------------------
const formElementText = document.querySelector('.popup__admin_type_text')
const formElementImage = document.querySelector('.popup__admin_type_image')
//-------------------------------------------------------------------------

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_field_name')
const jobInput = document.querySelector('.popup__input_field_activity')

//ТЕМПЛЕЙТ--------------------------------------------------------------

//----------------------------------------------------------------------
const cardsContainer = document.querySelector('.cards')

//КНОПКА РЕДАКТИРОВАНИЯ КАРТИНОК-------------------------------------------------
const buttonImageRedactor = document.querySelector('.profile__button')
const popupInputImgTitle = document.querySelector('.popup__input_field_name-img')
const popupInputImgLink = document.querySelector('.popup__input_field_link')
//-------------------------------------------------------------------------------

const popups = document.querySelectorAll('.popup')



popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
  })
})

export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}


//ЗАКРЫТЬ ПОПАП---------------------------
function closePopup(popup) {
  popup.classList.add('animation');
  setTimeout(function () {
    popup.classList.remove('popup_opened')
    popup.classList.remove('animation')
  }, 300)
  document.removeEventListener('keydown', closeByEscape);
}
//----------------------------------------


initialCards.forEach(el => renderCard(createExempleCard(el.name, el.link, templateSelector), cardsContainer));



function renderCard(card, container) {
  container.prepend(card);
}
function createExempleCard(name, link, templateSelector) {
  return new Card(name, link, templateSelector).createCard()
}

// ПО НАЖАТИЮ НА "ОТПРАВИТЬ (ТЕКСТ)"
function submitFormHandlerText(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupTypeTextForm);
}
function openPopupText(pop) {
  enableTextFormValidation.clearError()
  nameInput.value = profileTitle.textContent
  jobInput.value = profileSubtitle.textContent
  enableTextFormValidation.checkButtonValidity()
  openPopup(pop)
}

function submitFormHandlerImage(evt) {
  evt.preventDefault();
  const name = popupInputImgTitle.value
  const link = popupInputImgLink.value
  renderCard(createExempleCard(name, link, templateSelector), cardsContainer)
  closePopup(popupTypeImageForm);
  formElementImage.reset()
}

function openPopupImageForm(pop) {
  formElementImage.reset()
  enableImageFormValidation.clearError()

  console.log(pop);
  enableImageFormValidation.checkButtonValidity()
  openPopup(pop)
}


//СЛУШАТЕЛИ
popupOpenTextRedactor.addEventListener('click', () => openPopupText(popupTypeTextForm))
buttonImageRedactor.addEventListener('click', () => openPopupImageForm(popupTypeImageForm))
formElementText.addEventListener('submit', submitFormHandlerText);
formElementImage.addEventListener('submit', submitFormHandlerImage)

// enableValidation(validObj);

const enableTextFormValidation = new FormValidator(validObj, formElementText)
const enableImageFormValidation = new FormValidator(validObj, formElementImage)

enableTextFormValidation.enableValidation()
enableImageFormValidation.enableValidation()
