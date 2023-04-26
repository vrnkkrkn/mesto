import Card from './card.js';
import FormValidator from './FormValidator.js';
import { validationConfig } from './validate.js';


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/** popup */
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_type_edit'); /** редактировать профиль */
const popupAdd = document.querySelector('.popup_type_add'); /** добавить карточку */

/** все кнопки закрыть */
const popupCloseIcons = document.querySelectorAll('.popup__close-icon');

/** данные профиля */
const profileActivity = document.querySelector('.profile__activity');
const formEdit = document.querySelector('.form_type_edit');
const formName = document.querySelector('.form__item_el_name');
const formActivity = document.querySelector('.form__item_el_activity');
const profileName = document.querySelector('.profile__name');
const profileEditButton = document.querySelector('.profile__edit-button'); /** кнопка открытия popup */

/** данные карточки */
const formAdd = document.querySelector('.form_type_add');
const formTitle = document.querySelector('.form__item_el_title');
const formlink = document.querySelector('.form__item_el_link');
const profileAddButton = document.querySelector('.profile__add-button'); /** кнопка открытия popup */

/** для темплейта */
const elementsContainer = document.querySelector('.elements');

/** экземпляр класса валидатора*/
const formEditValidator = new FormValidator(validationConfig, formEdit);
/** включение */
formEditValidator.enableValidation();

/** экземпляр класса валидатора*/
const formAddValidator = new FormValidator(validationConfig, formAdd);
/** включение */
formAddValidator.enableValidation();

/** открытие popup */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

/** закрытие popup */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

/** добавление карточки */
function addCard(element) {
  const card = new Card(element, '#element-template', openPopup);
  const cardElement = card.generateCard();
  return cardElement;
}

/** функция для того, чтобы можно было помещать новую карточку в верстку */
function renderCard(element) {
  const cardElement = addCard(element)
  elementsContainer.prepend(cardElement);
}

/** 6 карточек на странице */
initialCards.forEach(function (element) {
  renderCard(element);
});

/** закрытие попапа кликом на оверлей */
popups.forEach(function (closePopupOverlay) {
  closePopupOverlay.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(evt.target);
    }
  })
});

/** закрытие попапа нажатием на Esc */
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
};

/** обработчик «отправки» формы  для редактирования профиля*/
function handleFormSubmit(evt) {
  evt.preventDefault(); /** Эта строчка отменяет стандартную отправку формы. */
  profileName.textContent = formName.value;
  profileActivity.textContent = formActivity.value;
  closePopup(popupEdit);
}

/** обработчик «отправки» формы  для добавления карточки*/
function addCardHandleFormSubmit(evt) {
  evt.preventDefault();
  renderCard({ name: formTitle.value, link: formlink.value });
  closePopup(popupAdd);
  evt.target.reset();
  formAddValidator.resetValidation();
}

/** закрытие popup при нажатии на крестик */
popupCloseIcons.forEach(function (popupCloseIcons) {
  popupCloseIcons.addEventListener('click', function (evt) {
    closePopup(evt.target.closest('.popup'));
  });
});

/** открытие popup редактирования с заполненными полями*/
profileEditButton.addEventListener('click', function () {
  openPopup(popupEdit);
  formName.value = profileName.textContent;
  formActivity.value = profileActivity.textContent;
});

/** открытие popup добавления */
profileAddButton.addEventListener('click', function () {
  openPopup(popupAdd);
});

/** обработчики к форме: они следят за событием “submit” - «отправка» */
formEdit.addEventListener('submit', handleFormSubmit); /** для редактирования профиля */
formAdd.addEventListener('submit', addCardHandleFormSubmit); /** для добавления карточки */