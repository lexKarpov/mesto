export default class UserInfo {
  constructor({ name, activity }) {
    this._name = document.querySelector(name)
    this._activity = document.querySelector(activity)
    this._avatar = document.querySelector('.profile__avatar')
  }

  getUserInfo() {
    return { name: this._name.textContent, activity: this._activity.textContent }
  }

  setUserInfo({name, activity}) {
    this._name.textContent = name
    this._activity.textContent = activity
  }
  changeAvatar(link){
    this._avatar.src = link
  }
}
