export class Api {
  constructor(options, func1, func2, func3) {
    this._url = options.baseUrl
    this._auth = options.headers.authorization
    this._func1 = func1
    this._func2 = func2
    this._func3 = func3
  }
  postCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: `${this._auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(err => console.log(err))
  }
  getInitialCards() {
    fetch(`${this._url}/cards`, {
      headers: {
        authorization: `${this._auth}`,
      }
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
      });
   }
  patchText(data){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.activity
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(err => console.log(err))
  }
  getUserInfo(){
    fetch(`${this._url}/users/me`, {
        headers: {
        authorization: `${this._auth}`,
        }
      })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then((result) => {
        this._func1(result)
        })
      .catch(err => console.log(err))
  }

  renderCards(){
    fetch(`${this._url}/cards`, {
      headers: {
        authorization: `${this._auth}`,
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then((result) => {
        this._func2(result)
      })
      .catch(err => console.log(err))
  }

  getLikesCoins(cardId){
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `${this._auth}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(err => console.log(err))
  }
  deleteLikesCoins(cardId){
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: `${this._auth}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(err => console.log(err))
  }
  deleteCard(cardId){
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `${this._auth}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(err => console.log(err))
  }

  changeAvatar(link){
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-39/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(err => console.log(err))
  }
}

//Токен: 322327ea-4136-41b9-989d-cc6e37a8bd67
// Идентификатор группы: cohort-39

