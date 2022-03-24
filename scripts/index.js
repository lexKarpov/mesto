import { FormValidator } from './FormValidator.js'
import { initialCards } from './array.js'
import { validObj } from './consts.js'
import { Card } from './Card.js'
import { Section } from './Section.js'
import Popup from './Popup.js'
import PopupWithForm from './PopupWithForm.js'
import PopupWithImage from './PopupWithImage.js'
import UserInfo from './UserInfo.js'

export const templateSelector = '.card-template'

const popupOpenTextRedactor = document.querySelector('.profile__redaction-button');

export const openPopupTypeTextForm = new Popup('.popup_type_text-form')

//-------------------------------------------------------------------------

//ФОРМА--------------------------------------------------------------------
const formElementText = document.querySelector('.popup__admin_type_text')
const formElementImage = document.querySelector('.popup__admin_type_image')
//-------------------------------------------------------------------------

export const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_field_name')
const jobInput = document.querySelector('.popup__input_field_activity')

const cardsContainer = document.querySelector('.cards')

//КНОПКА РЕДАКТИРОВАНИЯ КАРТИНОК-------------------------------------------------
const buttonImageRedactor = document.querySelector('.profile__button')
//-------------------------------------------------------------------------------

function createExempleCard(name, link, templateSelector) {
  // return new Card(name, link, templateSelector, (name, link) => popupWithImg.open({ name: name, link: link })).createCard()
  return new Card(name, link, templateSelector, (name, link) => popupWithImg.open({ name: name, link: link })).createCard()
}


export const enableTextFormValidation = new FormValidator(validObj, formElementText)
export const enableImageFormValidation = new FormValidator(validObj, formElementImage)

enableTextFormValidation.enableValidation()
enableImageFormValidation.enableValidation()

const userInfoExample = new UserInfo({ name: '.profile__title', activity: '.profile__subtitle' })

const elem = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const example = new Card(item.name, item.link, templateSelector, (name, link) => popupWithImg.open({ name: name, link: link })).createCard()
      elem.addItem(example)
      return example
    }
  }, cardsContainer

)
elem.renderItems()


// =========================================example of class PopupWithImage===============
export const popupWithImg = new PopupWithImage('.popup_type_image')
//========================================================================================

const PopupWithFrmImage = new PopupWithForm('.popup_type_image-form', (evt) => {
  evt.preventDefault();
  const listInputs = PopupWithFrmImage._getInputValues()
  const name = listInputs[0].value
  const link = listInputs[1].value
  elem.addItem(createExempleCard(name, link, templateSelector))
  PopupWithFrmImage.close()
  enableImageFormValidation.checkButtonValidity()
})

export const popupWithText = new PopupWithForm('.popup_type_text-form', (evt) => {
  evt.preventDefault();
  userInfoExample.setUserInfo()
  popupWithText.close()
  const contentList = userInfoExample.getUserInfo()
  console.log(contentList);
  nameInput.value = contentList.name
  jobInput.value = contentList.activity
})

popupOpenTextRedactor.addEventListener('click', () => {
  popupWithText.open()

})
buttonImageRedactor.addEventListener('click', () => PopupWithFrmImage.open())
