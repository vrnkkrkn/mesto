const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_visible'
};

const showError = (form, item, errorMessage, validation) => {
  const errorElement = form.querySelector(`#${item.id}-error`);
  item.classList.add(validation.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validation.errorClass);
};

const hideError = (form, item, validation) => {
  const errorElement = form.querySelector(`#${item.id}-error`);
  item.classList.remove(validation.inputErrorClass);
  errorElement.classList.remove(validation.errorClass);
  errorElement.textContent = '';
};

const checkItemValidity = (form, item, validation) => {
  if (!item.validity.valid) {
    showError(form, item, item.validationMessage, validation);
  } else {
    hideError(form, item, validation);
  }
};

const setEventListeners = (form, validation) => {
  const itemList = Array.from(form.querySelectorAll(validation.inputSelector));
  const button = form.querySelector(validation.submitButtonSelector);
  toggleButtonState(itemList, button, validation);
  itemList.forEach((item) => {
    item.addEventListener('input', function () {
      checkItemValidity(form, item, validation);
      toggleButtonState(itemList, button, validation);
    });
  });
};

const enableValidation = (validation) => {
  const formList = Array.from(document.querySelectorAll(validation.formSelector));
  formList.forEach((form) => {
    setEventListeners(form, validation);
  });
};

const hasInvaliditem = (itemList) => {
  return itemList.some((item) => {
    return !item.validity.valid;
  });
};

const toggleButtonState = (itemList, button, validation) => {
  if (hasInvaliditem(itemList)) {
    button.disabled = true;
    button.classList.add(validation.inactiveButtonClass);
  } else {
    button.disabled = false;
    button.classList.remove(validation.inactiveButtonClass);
  }
};

enableValidation(validationConfig);
