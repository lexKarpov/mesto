let popupOpen = document.querySelector('.profile__redaction-button');

let popup = document.querySelector('.popup'); //нашли элемент, которому будем добавлять/удалять стили

let popupClose = document.querySelector('.popup__button-close') //нашли крестик
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_field_name')// Воспользуйтесь инструментом .querySelector()
console.log(nameInput.value);
let jobInput = document.querySelector('.popup__input_field_activity')// Воспользуйтесь инструментом .querySelector()

popupOpen.addEventListener('click', () => popup.classList.add('popup_opened'));
popupClose.addEventListener('click', popupCloser);

// Находим форму в DOM
let formElement = document.querySelector('.popup__admin') // Воспользуйтесь методом querySelector

function popupCloser() {
  document.querySelector('.popup').classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileTitle.textContent = nameInput.value
  profileSubtitle.textContent = document.querySelector('.popup__input_field_activity').value;
  popupCloser();
}

formElement.addEventListener('submit', formSubmitHandler);

function preLoadText() {
  profileTitle.textContent = 'Жак-Ив Кусто'
  profileSubtitle.textContent = 'Исследователь океана'
}
preLoadText()
