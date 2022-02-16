const popupOpenTextRedactor = document.querySelector('.profile__redaction-button');
//ПОПАПЫ-------------------------------------------------------------------
const popupTypeTextForm = document.querySelector('.popup_type_text-form')
const popupTypeImageForm = document.querySelector('.popup_type_image-form')
const popupTypeImage = document.querySelector('.popup_type_image')
//-------------------------------------------------------------------------

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
const templateGallery = document.querySelector('.card-template').content
//----------------------------------------------------------------------
const cards = document.querySelector('.cards')

//КНОПКА РЕДАКТИРОВАНИЯ КАРТИНОК-------------------------------------------------
const buttonImageRedactor = document.querySelector('.profile__button')
const popupInputImgTitle = document.querySelector('.popup__input_field_name-img')
const popupInputImgLink = document.querySelector('.popup__input_field_link')
//-------------------------------------------------------------------------------
const img = popupTypeImage.querySelector('.popup__image')
const caption = popupTypeImage.querySelector('.popup__figcaption')
const popups = document.querySelectorAll('.popup')

initialCards.forEach(el => renderCard(createCard(el.name, el.link), cards))

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
  })
})

function closeByEscape(evt){
  if(evt.key === 'Escape'){
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}

//ОТКРЫТЬ ПОПАП-----------------------
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}
//------------------------------------
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

function createCard(name, link){
  const card = templateGallery.cloneNode(true);
  const galleryTitle = card.querySelector('.gallery__title');
  const galleryImages = card.querySelector('.gallery__img');
  const deleteCardButton = card.querySelector('.gallery__delete');
  galleryTitle.textContent = name;
  galleryTitle.classList.add('ellipsis');
  galleryImages.src = link;
  galleryImages.alt = name;

  const clickImage = card.querySelector('.gallery__img')
  const like = card.querySelector('.gallery__like');
  const elem = card.querySelector('.gallery__card');
  deleteCardButton.addEventListener('click', () => deleteCard(elem));
  like.addEventListener('click', ()=> likeToggles(like))
  clickImage.addEventListener('click', ()=> openPopupImage(name, link))
  return elem
 }
 //ОТКРЫТЬ ПОПАП С КАРТИНКОЙ--------------------------------------
function openPopupImage(name, link){
  img.alt = name
  img.src = link
  caption.textContent = name
  openPopup(popupTypeImage)
}
//----------------------------------------------------------------

function renderCard(card, container) {
  container.prepend(card);
}
function likeToggles(el){
  el.classList.toggle('gallery__like_active')
}
function deleteCard(card) {
  card.remove();
}

// ПО НАЖАТИЮ НА "ОТПРАВИТЬ (ТЕКСТ)"
function submitFormHandlerText(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupTypeTextForm);
}
function openPopupText(pop) {
  openPopup(pop)
  nameInput.placeholder = profileTitle.textContent
  jobInput.placeholder = profileSubtitle.textContent
  nameInput.value = ''
  jobInput.value = ''
  checkButtonValidity(formElementText, validObj)
}

function submitFormHandlerImage(evt) {
  evt.preventDefault();
    const name = popupInputImgTitle.value
    const link = popupInputImgLink.value
    renderCard(createCard(name, link), cards)
    closePopup(popupTypeImageForm);
    formElementImage.reset()
}

function openPopupImageForm(pop) {
  openPopup(pop)
  popupInputImgTitle.value = ''
  popupInputImgLink.value = ''
  checkButtonValidity(formElementImage, validObj)
}

//СЛУШАТЕЛИ
popupOpenTextRedactor.addEventListener('click', ()=> openPopupText(popupTypeTextForm))
buttonImageRedactor.addEventListener('click', ()=>openPopupImageForm(popupTypeImageForm))
formElementText.addEventListener('submit', submitFormHandlerText);
formElementImage.addEventListener('submit', submitFormHandlerImage)

const validObj = {
  formSelector: '.isvalid',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__submit_disable',
  errorClass: 'error-color'
}
enableValidation(validObj);
