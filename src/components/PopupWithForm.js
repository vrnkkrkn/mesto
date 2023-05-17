import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmit}) {
    super(popupSelector);
    this._formSubmit =  formSubmit;
    this._form = this._popup.querySelector('.form');
    this._itemList = this._form.querySelectorAll('.form__item');
  }
  
  getInputValues() {
    this._itemValues = {};
    
    this._itemList.forEach(item => {
      this._itemValues[item.name] = item.value;
    });
    
    return this._itemValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._formSubmit);
  }

  close() {
    super.close();
    this._form.reset();
  }
}