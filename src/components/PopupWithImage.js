import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPicture = this._popup.querySelector('.popup__picture');
    this._popupText = this._popup.querySelector('.popup__text');
  }

  open(title, link) {
    super.open();
    this._popupPicture.src = link;
    this._popupPicture.alt = title;
    this._popupText.textContent = title;
  }
}