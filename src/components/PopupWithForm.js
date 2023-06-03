import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit =  handleFormSubmit;
    this._form = this._popup.querySelector('.form');
    this._itemList = this._form.querySelectorAll('.form__item');
    this._submitButton = this._popup.querySelector('.popup__button');
  }
  
  _getInputValues() {
    this._itemValues = {};
    
    this._itemList.forEach(item => {
      this._itemValues[item.name] = item.value;
    });
    
    return this._itemValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = 'Сохранение...';
      this._handleFormSubmit(this._getInputValues(), this._submitButton);
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}