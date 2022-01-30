let popupOpen = document.querySelector('.profile__redaction-button');
let popup = document.querySelector('.popup'); //нашли элемент, которому будем добавлять/удалять стили
let popupClose = document.querySelector('.popup__button-close') //нашли крестик
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileSubtitlePopup = document.querySelector('.popup__admin');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_field_name')// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_field_activity')// Воспользуйтесь инструментом .querySelector()
// Находим форму в DOM
let formElement = document.querySelector('.popup__admin') // Воспользуйтесь методом querySelector
let templateGallery = document.querySelector('.card-template').content
let cards = document.querySelector('.cards')



// console.log(galleryImages);

// galleryList.forEach(el=>el.addEventListener('click', openGalleryImage))
// Массив с фото 
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

function galleryLoad(){

  for(let i = 0; i < initialCards.length; i++){
    let tempClone = templateGallery.cloneNode(true);
    let galleryTitle = tempClone.querySelector('.gallery__title')
    let galleryImages = tempClone.querySelector('.gallery__img')
    cards.appendChild(tempClone)
    galleryTitle.textContent = initialCards[i].name
    galleryTitle.classList.add('ellipsis')
    galleryImages.src = initialCards[i].link
  }
}
galleryLoad()


function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function popupCloser() {
  popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupCloser();
}










formElement.addEventListener('submit', formSubmitHandler);
popupClose.addEventListener('click', popupCloser);
popupOpen.addEventListener('click', openPopup);