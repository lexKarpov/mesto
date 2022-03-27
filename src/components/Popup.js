export default class Popup {
  constructor(popupSelector) {
    this._selector = popupSelector;
    this._element = document.querySelector(this._selector);

  }
  _handleClose = (evt) => {
    if (evt.key === 'Escape' || evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
      this.close()
    }
  };
  open() {
    this._element.classList.add('popup_opened')
  }

  close() {
    this._element.classList.add('animation');
    setTimeout(() => {
      this._element.classList.remove('popup_opened')
      this._element.classList.remove('animation')
    }, 300)
    document.removeEventListener('keydown', this._handleClose)
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleClose);
    this._element.addEventListener('click', this._handleClose);
  }
}

