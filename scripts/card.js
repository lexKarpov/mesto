import { templateGallery } from './consts.js'
import { openPopupImage } from './utils.js'


export class CreateCard {
  constructor(name, link) {
    this._name = name
    this._link = link
    this._card = templateGallery.cloneNode(true);
    this._galleryTitle = this._card.querySelector('.gallery__title');
    this._galleryImages = this._card.querySelector('.gallery__img');
    this._deleteCardButton = this._card.querySelector('.gallery__delete');
    this._clickImage = this._card.querySelector('.gallery__img')
    this._like = this._card.querySelector('.gallery__like');
    this._elem = this._card.querySelector('.gallery__card');
  }
  _likeToggles() {
    this._like.classList.toggle('gallery__like_active')
  }

  _deleteCard(card) {
    card.remove();
  }
  _setEventListener() {
    this._deleteCardButton.addEventListener('click', () => this._deleteCard(this._elem));
    this._like.addEventListener('click', () => this._likeToggles(this._like))
    this._clickImage.addEventListener('click', () => openPopupImage(this._name, this._link))
  }
  createCard() {
    this._setEventListener()
    const galleryTitle = this._card.querySelector('.gallery__title');
    const galleryImages = this._card.querySelector('.gallery__img');
    galleryTitle.textContent = this._name;
    galleryTitle.classList.add('ellipsis');
    galleryImages.src = this._link;
    galleryImages.alt = this._name;
    return this._elem
  }

}
