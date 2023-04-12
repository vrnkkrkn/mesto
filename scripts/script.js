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
const popupImage = document.querySelector('.popup_type_image'); /** открыть картинку */

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
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

/** фотография c названием */
const popupPicture = document.querySelector('.popup__picture');
const popupText = document.querySelector('.popup__text');

/** открытие popup */
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

/** закрытие popup */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

/** добавление карточки */
function addCard(name, link) {
  /** клонируем содержимое тега template */
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');

  /** наполняем содержимым */
  elementImage.src = link;
  elementImage.alt = name;
  cardElement.querySelector('.element__title').textContent = name;

  /** лайк */
  cardElement.querySelector('.element__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__heart_active');
  });

  /** удаление */
  cardElement.querySelector('.element__trash').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  /**  открытие popup фотографии */
  elementImage.addEventListener('click', function (evt) {
    popupPicture.src = link;
    popupPicture.alt = name;
    popupText.textContent = name;
    openPopup(popupImage);
  });

  return cardElement;
}

/** функция для того, чтобы можно было помещать новую карточку в верстку */
function renderCard(name, link) {
  const cardElement = addCard(name, link);
  elements.prepend(cardElement);
}

/** 6 карточек на странице */
initialCards.forEach((function (card) {
  renderCard(card.name, card.link);
}));

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
  elements.prepend(addCard(formTitle.value, formlink.value));
  closePopup(popupAdd);
  evt.target.reset();
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

/** закрыть попапы кликом на esc */
popupAdd.addEventListener('keydown', closePopupEsc);
popupEdit.addEventListener('keydown', closePopupEsc);
popupImage.addEventListener('keydown', closePopupEsc);