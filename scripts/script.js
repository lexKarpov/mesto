let popupOpen = document.querySelector('.profile__setting-image') //нажали на кнопку править
let popup = document.querySelector('.popup'); //нашли элемент, которому будем добавлять/удалять стили
let popupClose = document.querySelector('.popup__button-close') //нашли крестик
let popupSubmit = document.querySelector('.popup__submit')
let nameNewText = '';
let jobNewText = '';

let ptofileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');


popupOpen.addEventListener('click', () => popup.classList.add('popup_opened'));
popupClose.addEventListener('click', () => popup.classList.remove('popup_opened'));
popupSubmit.addEventListener('click', () => popup.classList.remove('popup_opened'));

// Находим форму в DOM
let formElement = document.querySelector('.popup__admin') // Воспользуйтесь методом querySelector

// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name')// Воспользуйтесь инструментом .querySelector()
console.log(nameInput.value);
let jobInput = document.querySelector('.popup__activity')// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value
  nameNewText = nameInput.value;
  jobNewText = jobInput.value;

  // Выберите элементы, куда должны быть вставлены значения полей
  ptofileTitle.textContent = nameNewText;
  profileSubtitle.textContent = jobNewText;
  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
