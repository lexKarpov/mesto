let popupOpen = document.querySelector('.profile__redaction-button');
console.log(popupOpen); //нажали на кнопку править
let popup = document.querySelector('.popup'); //нашли элемент, которому будем добавлять/удалять стили
console.log(popup);
let popupClose = document.querySelector('.popup__button-close') //нашли крестик
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_field_name')// Воспользуйтесь инструментом .querySelector()
console.log(nameInput.value);
let jobInput = document.querySelector('.popup__input_field_activity')// Воспользуйтесь инструментом .querySelector()

popupOpen.addEventListener('click', () => popup.classList.add('popup_opened'));
// popupClose.addEventListener('click', popupCloser);
// popupSubmit.addEventListener('click', () => popup.classList.remove('popup_opened'));

// Находим форму в DOM
let formElement = document.querySelector('.popup__admin') // Воспользуйтесь методом querySelector

function popupCloser() {
  document.querySelector('.popup').classList.remove('popup_opened')
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value


  // Выберите элементы, куда должны быть вставлены значения полей

  profileTitle.textContent = nameInput.value
  profileSubtitle.textContent = document.querySelector('.popup__input_field_activity').value;
  popupCloser();
  // Вставьте новые значения с помощью textContent
  // document.querySelector('.popup__submit').addEventListener('click', () => popup.classList.remove('popup_opened'));
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


function preLoadText() {
  profileTitle.textContent = 'Жак-Ив Кусто'
  profileSubtitle.textContent = 'Исследователь океана'
}
preLoadText()
