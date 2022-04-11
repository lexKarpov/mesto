export class Api {
  constructor(options) {
    this._url = options.baseUrl
    this._auth = options.headers.authorization
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
      .then(this._checkResponse)
  }
  // getInitialCards() {
  //   fetch(`${this._url}/cards`, {
  //     headers: {
  //       authorization: `${this._auth}`,
  //     }
  //   })
  //     // .then(res => res.json())
  //     .then(res=>this._checkResponse(res))
  //     .then((result) => {
  //       console.log(result);
  //     });
  //  }
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
      .then(this._checkResponse)

  }
  getUserInfo(){
    return fetch(`${this._url}/users/me`, {
        headers: {
        authorization: `${this._auth}`,
        }
      })
      .then(this._checkResponse)
  }

  getCards(){
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: `${this._auth}`,
      }
    })
      .then(this._checkResponse)
  }

  getLikesCoins(cardId){
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `${this._auth}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }
  deleteLikesCoins(cardId){
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: `${this._auth}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res=>this._checkResponse(res))
  }
  deleteCard(cardId){
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `${this._auth}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
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
      .then(this._checkResponse)
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

}

//Токен: 322327ea-4136-41b9-989d-cc6e37a8bd67
// Идентификатор группы: cohort-39

