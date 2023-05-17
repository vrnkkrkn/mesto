import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupPicture = document.querySelector('.popup__picture');
    this._popupText = document.querySelector('.popup__text');
  }

  open(title, link) {
    super.open();
    this._popupPicture.src = link;
    this._popupPicture.alt = title;
    this._popupText.textContent = title;
  }
}