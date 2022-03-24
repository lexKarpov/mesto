export default class UserInfo {
  constructor({ name, activity }) {
    this._name = document.querySelector(name)
    this._activity = document.querySelector(activity)
    this._container = document.querySelector('.popup_type_text-form')

  }

  getUserInfo() {
    return { name: this._name.textContent, activity: this._activity.textContent }
  }

  setUserInfo() {
    this.inputs = this._container.querySelectorAll('.popup__input')
    this._name.textContent = this.inputs[0].value
    this._activity.textContent = this.inputs[1].value
  }
}
