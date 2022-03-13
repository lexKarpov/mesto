
import { openPopupImage } from './utils.js'


export class Card {
  constructor(name, link, templateElement) {
    this._name = name
    this._link = link
    this._card = document.querySelector(templateElement).content.cloneNode(true);
    this._galleryTitle = this._card.querySelector('.gallery__title');
    this._galleryImages = this._card.querySelector('.gallery__img');
    this._cardDeleteButton = this._card.querySelector('.gallery__delete');
    this._like = this._card.querySelector('.gallery__like');
    this._elem = this._card.querySelector('.gallery__card');
  }
  _likeToggles() {
    this._like.classList.toggle('gallery__like_active')
  }

  _deleteCard() {
    this._elem.remove();
    this._elem = null
  }
  _setEventListener() {
    this._cardDeleteButton.addEventListener('click', () => this._deleteCard());
    this._like.addEventListener('click', () => this._likeToggles(this._like))
    this._galleryImages.addEventListener('click', () => openPopupImage(this._name, this._link))
  }
  createCard() {
    this._setEventListener()
    this._galleryTitle.textContent = this._name;
    this._galleryTitle.classList.add('ellipsis');
    this._galleryImages.src = this._link;
    this._galleryImages.alt = this._name;
    return this._elem
  }

}
