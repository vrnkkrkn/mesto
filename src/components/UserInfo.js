/** Класс UserInfo отвечает за управление отображением информации о пользователе на странице */
export default class UserInfo {
  constructor({ userNameSelector, userActivitySelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._activity = document.querySelector(userActivitySelector);
  }

  /** метод, который возвращает объект с данными пользователя */
  getUserInfo() {
    const userInfo = {
      userName: this._userName.textContent,
      activity: this._activity.textContent
    };

    return userInfo;
  }

  /** метод, который принимает новые данные пользователя и добавляет их на страницу */
  setUserInfo(info) {
    this._userName.textContent = info.userName;
    this._activity.textContent = info.activity;
  }
}