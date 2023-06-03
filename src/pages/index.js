import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import {
  validationConfig,
  cardListSelector,
  popupTypeImageSelector,
  popupTypeAddSelector,
  popupTypeEditSelector,
  formEdit,
  formName,
  formActivity,
  profileEditButton,
  formAdd,
  profileAddButton,
  popupTypeAvatarSelector,
  profileAvatar,
  formAvatar,
  popupTypeConfirm
} from '../utils/constans.js';
import './index.css';

/** экземпляры класса валидатора*/
const formEditValidator = new FormValidator(validationConfig, formEdit);
const formAddValidator = new FormValidator(validationConfig, formAdd);
const fornAvatarValidator = new FormValidator(validationConfig, formAvatar);
/** включение */
formEditValidator.enableValidation();
formAddValidator.enableValidation();
fornAvatarValidator.enableValidation();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '00d72194-808b-451d-881a-fdbd02e835f2',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getInitialCards(), api.getUserInfo()])
  /** обрабатываем результат*/
  .then(([dataCards, dataProfile]) => {
    dataCards.forEach((element) => {
      element.myId = dataProfile._id;
    });
    userInfo.setUserInfo({ userName: dataProfile.name, activity: dataProfile.about, avatar: dataProfile.avatar });
    cardList.renderItems(dataCards);
  })
  /** выведем ошибку в консоль */
  .catch((error) => {
    console.log(error);
  });

/** экземпляр класса для popup подтверждение удаления */
const popupWithSubmit = new PopupWithSubmit(popupTypeConfirm, ({ element, id }) => {
  api.deleteCard(id)
    /** обрабатываем результат*/
    .then(() => {
      element.deleteCard();
      popupWithSubmit.close();
    })
    /** выведем ошибку в консоль */
    .catch((error) => {
      console.error(error);
    })
});
popupWithSubmit.setEventListeners();

/** добавление карточки */
function addCard(element) {
  const card = new Card(element, '#element-template', openPopupImage, popupWithSubmit.open, {
    handleLikeCard: () => {
      if (card.isLike) {
        api.deleteLike(card.returnCardId())
          /** обрабатываем результат*/
          .then((result) => {
            card.deleteLikeCard();
            card.showSumLikes(result.likes);
          })
          .catch((error) => {
            /** выведем ошибку в консоль */
            console.log(error);
          })
      } else {
        api.putLike(card.returnCardId())
          /** обрабатываем результат*/
          .then(result => {
            card.likeCard();
            card.showSumLikes(result.likes);
          })
          .catch((error) => {
            /** выведем ошибку в консоль */
            console.log(error);
          })
      }
    }
  })
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section((element) => {
  cardList.addItemAppend(addCard(element));
}, cardListSelector);

/** экземпляр класса PopupWithImage для popup с картинкой */
const popupWithImage = new PopupWithImage(popupTypeImageSelector);

function openPopupImage(title, link) {
  popupWithImage.open(title, link);
}

popupWithImage.setEventListeners();

/** экземпляр класса PopupWithForm для popup добавления карточки */
const popupWithFormAdd = new PopupWithForm(popupTypeAddSelector, (data, submitButton) => {
  api.addNewCard(data)
    /** обрабатываем результат */
    .then(result => {
      cardList.addItemPrepend(addCard(result));
      popupWithFormAdd.close();
    })
    .catch((error) => {
      /** выведем ошибку в консоль */
      console.log(error);
    })
    .finally(() => {
      submitButton.textContent = 'Сохранить';
    });
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
  userActivitySelector: '.profile__activity',
  userAvatarSelector: '.profile__avatar'
});

/** экземпляр класса PopupWithForm для popup редактирования профиля */
const popupWithFormEdit = new PopupWithForm(popupTypeEditSelector, (data, submitButton) => {
  api.setUserInfo(data)
    /** обрабатываем результат */
    .then(result => {
      userInfo.setUserInfo({ userName: result.name, activity: result.about, avatar: result.avatar });
      popupWithFormEdit.close();
    })
    .catch((error) => {
      /** выведем ошибку в консоль */
      console.log(error);
    })
    .finally(() => {
      submitButton.textContent = 'Сохранить';
    });
});
popupWithFormEdit.setEventListeners();

/** аватар */
const popupAvatar = new PopupWithForm(popupTypeAvatarSelector, (data, submitButton) => {
  api.setAvatar(data)
    /** обрабатываем результат */
    .then(result => {
      userInfo.setUserInfo({ userName: result.name, activity: result.about, avatar: result.avatar });
      popupAvatar.close();
    })
    .catch((error) => {
      /** выведем ошибку в консоль */
      console.log(error);
    })
    .finally(() => {
      submitButton.textContent = 'Сохранить';
    });
});
popupAvatar.setEventListeners();

/** открытие popup аватар */
profileAvatar.addEventListener('click', () => {
  popupAvatar.open();
  fornAvatarValidator.resetValidation();
});

/** открытие  popup редактирования профиля*/
profileEditButton.addEventListener('click', () => {
  popupWithFormEdit.open();
  formName.value = userInfo.getUserInfo().userName;
  formActivity.value = userInfo.getUserInfo().activity;
  formEditValidator.resetValidation();
});