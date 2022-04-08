import {ownerCardId, api, popupConfirmDelete} from '../pages/index.js'


const templateSelector = '.card-template'


export class Card {
  constructor(name, link, handleCardClick, item) {
    this._objFromServer = item
    this._name = name
    this._link = link
    this._card = document.querySelector(templateSelector).content.cloneNode(true);
    this._galleryTitle = this._card.querySelector('.gallery__title');
    this._galleryImages = this._card.querySelector('.gallery__img');
    this._cardDeleteButton = this._card.querySelector('.gallery__delete');
    this._like = this._card.querySelector('.gallery__like');
    this._elem = this._card.querySelector('.gallery__card');
    this._likeCounter = this._card.querySelector('.gallery__like-counter');

    this._handleCardClick = handleCardClick
  }
  _likeToggles() {
    this._like.classList.toggle('gallery__like_active')
    if(this._like.classList.contains('gallery__like_active')){
      api.getLikesCoins(this._objectProperty._id)
        .then(res => {
          this.countLikes(res)
        })
        .catch(err => console.log(`error: ${err.message}`))

    }else{
      api.deleteLikesCoins(this._objectProperty._id)
        .then(res => {
          this.countLikes(res)
        })
    }
  }
  _getObj(){
    return [this._objectProperty, this._elem]
  }

  deleteCard() {
    api.deleteCard(this._objectProperty._id)
    this._elem.remove();
    this._elem = null
  }
  _setEventListener() {
    if(this._objectProperty.owner._id !== ownerCardId){
      this._cardDeleteButton.style.display = 'none'
    }

    this._cardDeleteButton.addEventListener('click', (evt) => popupConfirmDelete.open(this._getObj()));
    this._like.addEventListener('click', () => this._likeToggles(this._like))
    this._galleryImages.addEventListener('click', () => this._handleCardClick(this._name, this._link))
  }
  countLikes(objWithLikes){
    if(objWithLikes.likes.length>0){
      this._likeCounter.classList.add('gallery__like-counter_active')
      this._likeCounter.textContent = objWithLikes.likes.length
    }else{
      this._likeCounter.classList.remove('gallery__like-counter_active')
    }
  }
  createCard(item) {
    item.likes.some(el => {
      if(el._id === ownerCardId){
        this._like.classList.add('gallery__like_active')
      }
    })
    this._galleryTitle.textContent = this._name;
    this._galleryTitle.classList.add('ellipsis');
    this._galleryImages.src = this._link;
    this._galleryImages.alt = this._name;
    this._objectProperty = item
    this.countLikes(item)
    this._setEventListener()
    return this._elem
  }

}



