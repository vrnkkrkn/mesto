/** класс Popup отвечает за открытие и закрытие попапа */
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseIcon = this._popup.querySelector('.popup__close-icon');
  }

  /** открытие popup */
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  /** закрытие popup */
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this.setEventListeners()
  }

  /** закрытие попапа нажатием на Esc */
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    /** закрытие popup при нажатии на крестик */
    this._popupCloseIcon.addEventListener('click', () => {
      this.close();
    });

    /** закрытие попапа кликом на оверлей */
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
    });
  }
}