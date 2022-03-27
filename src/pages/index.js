import './index.css'; // добавьте импорт главного файла стилей

import { FormValidator } from '../components/FormValidator.js'
import { initialCards } from '../utils/array.js'
import { validObj } from '../utils/consts.js'
import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js'



const popupOpenTextRedactor = document.querySelector('.profile__redaction-button');

// export const openPopupTypeTextForm = new Popup('.popup_type_text-form')

//-------------------------------------------------------------------------

//ФОРМА--------------------------------------------------------------------
const formElementText = document.querySelector('.popup__admin_type_text')
const formElementImage = document.querySelector('.popup__admin_type_image')
//-------------------------------------------------------------------------

// export const profileTitle = document.querySelector('.profile__title');

// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_field_name')
const jobInput = document.querySelector('.popup__input_field_activity')

const cardsContainer = document.querySelector('.cards')

//КНОПКА РЕДАКТИРОВАНИЯ КАРТИНОК-------------------------------------------------
const buttonImageRedactor = document.querySelector('.profile__button')
//-------------------------------------------------------------------------------

const createExempleCard = (name, link) => {
  const card = new Card(
    name,
    link,
    (name, link) => {
      popupWithImg.open({ name: name, link: link })
    },
    cardsContainer);
  return card.createCard();
}


// function createExempleCard(name, link, func) {
//   return new Card(name, link, func)
// }


export const enableTextFormValidation = new FormValidator(validObj, formElementText)
export const enableImageFormValidation = new FormValidator(validObj, formElementImage)

enableTextFormValidation.enableValidation()
enableImageFormValidation.enableValidation()

const userInfoExample = new UserInfo({ name: '.profile__title', activity: '.profile__subtitle' })

const elem = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const example = createExempleCard(item.name, item.link)
      elem.addItem(example)
      return example
    }
  }, cardsContainer

)
elem.renderItems()


// =========================================example of class PopupWithImage===============
export const popupWithImg = new PopupWithImage('.popup_type_image')
//========================================================================================
const popupWithFrmImage = new PopupWithForm('.popup_type_image-form', (evt, data) => {
  evt.preventDefault()
  const name = data['name-img']
  const link = data.link
  elem.addItem(createExempleCard(name, link))
  popupWithFrmImage.close()
  enableImageFormValidation.blockButton()
})

export const popupWithText = new PopupWithForm('.popup_type_text-form', (evt, data) => {
  evt.preventDefault()
  userInfoExample.setUserInfo(data)
  popupWithText.close()
    nameInput.value = data.name
  jobInput.value = data.activity
})
popupOpenTextRedactor.addEventListener('click', () => {
  popupWithText.open()

})
buttonImageRedactor.addEventListener('click', () => popupWithFrmImage.open())



// const popupWithFrmImage = new PopupWithForm('.popup_type_image-form', (evt, data) => {
//   evt.preventDefault()
//   if(enableImageFormValidation._form.checkValidity()){ //при сабмите проверяется форма на валидность,
//     //это надо для того, чтобы по нажатию на оверлей при валидных значениях инпутов при следующем открытии
//     //попапа и сабмите с корректными инпутами не создавалась пустая карточка
//     const name = data['name-img'] //берем данные
//     const link = data.link
//     elem.addItem(createExempleCard(name, link)) // создаем карточку и добавляем на страницу
//     popupWithFrmImage.close() // закрыли попап
//     enableImageFormValidation.checkButtonValidity() // проверили , тобы кнопка не была активной при повторных открытиях попапа
//   }
//
// })
