import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
  validationConfig,
  initialCards,
  cardListSelector,
  popupTypeImageSelector,
  popupTypeAddSelector,
  popupTypeEditSelector,
  profileActivity,
  formEdit,
  formName,
  formActivity,
  profileName,
  profileEditButton,
  formAdd,
  profileAddButton
} from '../utils/constans.js';
import './index.css';

/** экземпляр класса валидатора*/
const formEditValidator = new FormValidator(validationConfig, formEdit);
/** включение */
formEditValidator.enableValidation();

/** экземпляр класса валидатора*/
const formAddValidator = new FormValidator(validationConfig, formAdd);
/** включение */
formAddValidator.enableValidation();


/** добавление карточки */
function addCard(element) {
  const card = new Card(element, '#element-template', openPopupImage);
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (element) => {
    cardList.addItem(addCard(element));
  }
}, cardListSelector);

cardList.renderItems();


/** экземпляр класса PopupWithImage для popup с картинкой */
const popupImage = new PopupWithImage(popupTypeImageSelector);

function openPopupImage(title, link) {
  popupImage.open(title, link);
}


/** экземпляр класса PopupWithForm для popup добавления карточки */
const popupWithFormAdd = new PopupWithForm({
  popupSelector: popupTypeAddSelector,
  formSubmit: (evt) => {
    evt.preventDefault();
    cardList.addItem(addCard(popupWithFormAdd.getInputValues()));
    popupWithFormAdd.close();
  }
});

/** открытие popup добавления*/
profileAddButton.addEventListener('click', () => {
  popupWithFormAdd.open();
  formAddValidator.resetValidation();
});

popupWithFormAdd.setEventListeners();


/** данные профиля */
const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userActivitySelector: '.profile__activity'
});


/** экземпляр класса PopupWithForm для popup редактирования профиля */
const popupWithFormEdit = new PopupWithForm({
  popupSelector: popupTypeEditSelector,
  formSubmit: (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(popupWithFormEdit.getInputValues());
    popupWithFormEdit.close();
  }
});

/** открытие  popup редактирования профиля*/
profileEditButton.addEventListener('click', () => {
  popupWithFormEdit.open();
  formName.value = profileName.textContent;
  formActivity.value = profileActivity.textContent;
  formEditValidator.resetValidation();
});

popupWithFormEdit.setEventListeners();