/** Класс UserInfo отвечает за управление отображением информации о пользователе на странице */
export default class UserInfo {
  constructor({ userNameSelector, userActivitySelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._activity = document.querySelector(userActivitySelector);
    this._avatar = document.querySelector(userAvatarSelector);

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
  setUserInfo({ userName, activity, avatar }) {
    this._userName.textContent = userName;
    this._activity.textContent = activity;
    this._avatar.src = avatar;
  }
}