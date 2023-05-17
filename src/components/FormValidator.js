export default class FormValidator {
  constructor(validationConfig, form) {
    this._form = form;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
  }



  _showError(item, errorMessage) {
    this._errorElement = this._form.querySelector(`#${item.id}-error`);
    item.classList.add(this._inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  _hideError = (item) => {
    this._errorElement = this._form.querySelector(`#${item.id}-error`);
    item.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = '';
  };

  _checkItemValidity(item) {
    if (!item.validity.valid) {
      this._showError(item, item.validationMessage);
    } else {
      this._hideError(item);
    }
  };

  _setEventListeners() {
    this._itemList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._itemList.forEach((item) => {
      item.addEventListener('input', () => {
        this._checkItemValidity(item);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  };

  _hasInvaliditem() {
    return this._itemList.some((item) => {
      return !item.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvaliditem()) {
      this._button.disabled = true;
      this._button.classList.add(this._inactiveButtonClass);
    } else {
      this._button.disabled = false;
      this._button.classList.remove(this._inactiveButtonClass);
    }
  };

  resetValidation() {
    this._toggleButtonState();
    this._itemList.forEach((item) => {
      this._hideError(item);
    });

  }
}


