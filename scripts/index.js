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