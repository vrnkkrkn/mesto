export const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__item_type_error',
    errorClass: 'form__item-error_visible'
};

export const initialCards = [
    {
        title: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        title: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        title: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        title: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        title: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        title: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const cardListSelector = '.elements';

/** popup */
export const popupTypeImageSelector = '.popup_type_image';
export const popupTypeAddSelector = '.popup_type_add';
export const popupTypeEditSelector = '.popup_type_edit';
export const popupTypeAvatarSelector = '.popup_type_avatar';
export const popupTypeConfirm = '.popup_type_confirm';

/** данные профиля */
export const formEdit = document.querySelector('.form_type_edit');
export const formAvatar = document.querySelector('.form_type_avatar');
export const formName = document.querySelector('.form__item_el_name');
export const formActivity = document.querySelector('.form__item_el_activity');
export const profileEditButton = document.querySelector('.profile__edit-button'); /** кнопка открытия popup */
export const profileAvatar = document.querySelector('.profile__icon');

/** данные карточки */
export const formAdd = document.querySelector('.form_type_add');
export const profileAddButton = document.querySelector('.profile__add-button'); /** кнопка открытия popup */