import './index.css'; // добавьте импорт главного файла стилей
import { FormValidator } from '../components/FormValidator.js'
import { validObj } from '../utils/consts.js'
import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js'
import {Api} from "../components/Api.js";
import PopupConfirmDelete from '../components/PopoupConfirmDelete.js'

export let ownerCardId = ''

//Аватарка
const avathar = document.querySelector('.profile__avatar')
const redactorAvatar = document.querySelector('.profile__redactor-image')

const popupOpenTextRedactor = document.querySelector('.profile__redaction-button');

//ФОРМА--------------------------------------------------------------------
const formElementText = document.querySelector('.popup__admin_type_text')
const formElementImage = document.querySelector('.popup__admin_type_image')
const formElementAvatar = document.querySelector('.popup__admin_type_image-profile')
//-------------------------------------------------------------------------

// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_field_name')
const jobInput = document.querySelector('.popup__input_field_activity')

const cardsContainer = document.querySelector('.cards')

//КНОПКА РЕДАКТИРОВАНИЯ КАРТИНОК-------------------------------------------------
const buttonImageRedactor = document.querySelector('.profile__button')
//-------------------------------------------------------------------------------

const createExempleCard = (name, link, item) => {
  const card = new Card(
    name,
    link,
    (name, link) => {
      popupWithImg.open({ name: name, link: link })
    },
    cardsContainer,
    ownerCardId,
    api,
    popupConfirmDelete
    );
  return card.createCard(item);
}

export const enableTextFormValidation = new FormValidator(validObj, formElementText)
export const enableImageFormValidation = new FormValidator(validObj, formElementImage)
export const enablepopupConfirmDeleteFormValidation = new FormValidator(validObj, formElementAvatar)

enableTextFormValidation.enableValidation()
enableImageFormValidation.enableValidation()
enablepopupConfirmDeleteFormValidation.enableValidation()
export const userInfoExample = new UserInfo({ name: '.profile__title', activity: '.profile__subtitle' })

const elem = new Section(
  {
    renderer: (item) => {
      const example = createExempleCard(item.name, item.link, item)
      elem.addItem(example)
      return example
    }
  },
  cardsContainer
)

export const popupConfirmDelete = new PopupConfirmDelete('.popup_type_confirm-delete-card', (evt, data) => {
  evt.preventDefault()
  const punctObj = changePoints(evt)
  punctObj.button.value = punctObj.withPunct
  api.deleteCard(data[0]._id)
    .then(res => {
      data[1].remove();
      data[1] = null
      popupConfirmDelete.close()
      enablepopupConfirmDeleteFormValidation.blockButton()

    })
    .catch(err => console.log(err))
    .finally(()=>{
      punctObj.button.value = punctObj.noPunct
    })
})

popupConfirmDelete.setEventListeners()
// =========================================example of class PopupWithImage===============
export const popupWithImg = new PopupWithImage('.popup_type_image')
popupWithImg.setEventListeners()
//========================ОТПРАВКА КАРТОЧКИ НА СЕРВЕР И ОТРИСОВКА===========================================
const popupWithFrmImage = new PopupWithForm('.popup_type_image-form', (evt, data) => {
  evt.preventDefault()
  const punctObj = changePoints(evt)
  punctObj.button.value = punctObj.withPunct
  const name = data['name-img']
  const link = data.link
  console.log(link)
  api.postCard(data['name-img'],data.link)
    .then(res=> {
      elem.addItem(createExempleCard(name, link, res))
      popupWithFrmImage.close()
      enableImageFormValidation.blockButton()

    })
    .catch(err => console.log(err))
    .finally(()=>{
      punctObj.button.value = punctObj.noPunct
    })
})
popupWithFrmImage.setEventListeners()

export const popupRedactProfileImage = new PopupWithForm('.popup_type_redactor-image-form', (evt, data) => {
  evt.preventDefault()
  const punctObj = changePoints(evt)
  punctObj.button.value = punctObj.withPunct

  api.changeAvatar(data.link)
    .then(res => {
      userInfoExample.changeAvatar(data.link)
      // punctObj.button.value = punctObj.noPunct
      popupRedactProfileImage.close()
    })
    .catch(err => console.log(err))
    .finally(()=>{
      punctObj.button.value = punctObj.noPunct
    })
})
popupRedactProfileImage.setEventListeners()

function changePoints(evt) {
  const formElem = evt.target.closest('.popup')
  const formButton = formElem.querySelector('.popup__submit')
  const formButtonWithoutPunct = formButton.value
  formButton.value = `${formButton.value}...`
  return {
    button: formButton,
    withPunct: formButton.value,
    noPunct: formButtonWithoutPunct,
  }
}

export const popupWithText = new PopupWithForm('.popup_type_text-form', (evt, data) => {
  evt.preventDefault()
  const punctObj = changePoints(evt)
  punctObj.button.value = punctObj.withPunct
  // userInfoExample.setUserInfo(data)
  popupWithText.close()
    api.patchText(data)
      .then(res=> {
        userInfoExample.setUserInfo(data)
        ownerCardId = res._id
        // punctObj.button.value = punctObj.noPunct
      })
      .catch(err => console.log(err))
      .finally(()=>{
        punctObj.button.value = punctObj.noPunct
      })
})


popupOpenTextRedactor.addEventListener('click', () => {
  const text = userInfoExample.getUserInfo()
  nameInput.value = text.name
  jobInput.value = text.activity
  popupWithText.open()
})

popupWithText.setEventListeners()
buttonImageRedactor.addEventListener('click', () => popupWithFrmImage.open())

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
    headers: {
      authorization: '322327ea-4136-41b9-989d-cc6e37a8bd67',
      'Content-Type': 'application/json'
    }
  }
);

const renderUserInfo = data=> {
  const {name, about, avatar} = data
  avathar.src = avatar
  ownerCardId = data._id
  userInfoExample.setUserInfo({name: name, activity: about})
}
const renderCards = data=> {
  elem.renderItems(data)
}

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userInfo, cards]) => {
    renderUserInfo(userInfo)
    renderCards(cards)
  })
  .catch(err => {
    // тут ловим ошибку
    console.log(err)
  });









redactorAvatar.addEventListener('click', ()=> {
  popupRedactProfileImage.open()
})
