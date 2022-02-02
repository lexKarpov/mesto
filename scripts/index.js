const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let popupOpenTextRedactor = document.querySelector('.profile__redaction-button');

let popup = document.querySelectorAll('.popup'); //нашли элемент, которому будем добавлять/удалять стили
let popupClose = document.querySelectorAll('.popup__button-close') //нашли крестик
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileSubtitlePopup = document.querySelector('.popup__admin');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_field_name')
let jobInput = document.querySelector('.popup__input_field_activity')
// Находим форму в DOM
let formElement = document.querySelectorAll('.popup__admin')
let templateGallery = document.querySelector('.card-template').content
let cards = document.querySelector('.cards')
//КНОПКА РЕДАКТИРОВАНИЯ КАРТИНОК
const buttonImageRedactor = document.querySelector('.profile__button')
const popupInputImgTitle = document.querySelector('.popup__input_field_name-img')
const popupInputImgLink = document.querySelector('.popup__input_field_link')


//НАХОДИМ КНОПКУ УДАЛЕНИЯ
function popupImage(evt) {
  popup[2].classList.add('popup_opened')
  let figcaption = popup[2].querySelector('.popup__figcaption')
  let clone = evt.target.cloneNode(true)
  // clone.classList.add('popup__image')
  console.log(clone.src);
  let elem = initialCards.filter(el => el.link === clone.src)
  console.log(elem);
  let image = document.querySelector('.popup__image')
  image.src = clone.src;
  figcaption.textContent = elem[0].name

}

// let deleteImage
function galleryLoad() {
  for (let i = 0; i < initialCards.length; i++) {
    let tempClone = templateGallery.cloneNode(true);
    let galleryTitle = tempClone.querySelector('.gallery__title');
    let galleryImages = tempClone.querySelector('.gallery__img');

    cards.appendChild(tempClone);
    galleryTitle.textContent = initialCards[i].name;
    galleryTitle.classList.add('ellipsis');
    galleryImages.src = initialCards[i].link;
    galleryImages.addEventListener('click', popupImage)
    like()
  }
  document.querySelectorAll('.gallery__delete').forEach(el => el.addEventListener('click', imageDelete));
}

galleryLoad()

function imageDelete(evt) {
  let element = evt.target.parentNode.querySelector('.gallery__img').src
  for (let i = 0; i < initialCards.length; i++) {
    if (initialCards[i].link === element) {
      let deleteElem = initialCards.splice(i, 1)
    }
  }
  for (let i = 0; i < initialCards.length + 1; i++) {
    let eachElem = document.querySelector('.gallery__card')
    eachElem.parentNode.removeChild(eachElem)
  }
  galleryLoad()
}


function like() {
  let like = document.querySelectorAll('.gallery__like');
  like.forEach((e) => e.addEventListener('click', likeBlack))
}

function likeBlack(ev) {
  ev.target.classList.toggle('gallery__like_active')
}
//ОТКРЫТЬ ТЕКСТОВЫЙ РЕДАКТОР
function openPopupTextRedactor() {
  popup[0].classList.add('popup_opened');

  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;

}
//ОТКРЫТЬ РЕДАКТОР КАРТИНОК
function openPopupImageRedactor() {
  popup[1].classList.add('popup_opened');
  popupInputImgTitle.value = ''
  popupInputImgLink.value = ''
}
// ЗАКРЫВАШКА
function popupCloser() {
  popup[0].classList.add('animation');
  setTimeout(function () {
    popup[0].classList.remove('popup_opened')
    popup[0].classList.remove('animation')
  }, 300)
  popup[1].classList.add('animation');
  setTimeout(function () {
    popup[1].classList.remove('popup_opened')
    popup[1].classList.remove('animation')
  }, 300)
  popup[2].classList.add('animation');
  setTimeout(function () {
    popup[2].classList.remove('popup_opened')
    popup[2].classList.remove('animation')
  }, 300)

}
// ПО НАЖАТИЮ НА "ОТПРАВИТЬ (ТЕКСТ)"
function formSubmitHandlerText(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupCloser();
}

// ПО НАЖАТИЮ НА "ОТПРАВИТЬ (КАРТИНКА)"
function formSubmitHandlerImage(evt) {
  evt.preventDefault();
  let newCard = {};
  newCard.name = popupInputImgTitle.value
  newCard.link = popupInputImgLink.value
  if (newCard.name !== '' && newCard.link !== '') {
    for (let i = 0; i < initialCards.length; i++) {
      let eachElem = document.querySelector('.gallery__card')
      eachElem.parentNode.removeChild(eachElem)
    }
    initialCards.unshift(newCard)
  }
  galleryLoad()
  popupCloser()
}

//СЛУШАТЕЛИ ДЛЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
formElement[0].addEventListener('submit', formSubmitHandlerText);
popupOpenTextRedactor.addEventListener('click', openPopupTextRedactor);
popupClose[0].addEventListener('click', popupCloser);
//------------------------------------

//СЛУШАТЕЛИ ДЛЯ РЕДАКТИРОВАНИЯ КАРТИНОК
buttonImageRedactor.addEventListener('click', openPopupImageRedactor)
popupClose[1].addEventListener('click', popupCloser);
formElement[1].addEventListener('submit', formSubmitHandlerImage);
//-------------------------------------
popupClose[2].addEventListener('click', popupCloser)
