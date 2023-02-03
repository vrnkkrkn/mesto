let popup = document.querySelector('.popup');
let popupCloseicon = document.querySelector('.popup__close-icon');
let form = document.querySelector('.form');
let formName = document.querySelector('.form__item_el_name');
let formActivity = document.querySelector('.form__item_el_activity');
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
let profileEditbutton = document.querySelector('.profile__edit-button');

/** Открытие popap с заполненными полями */
function openedPopap() {
    popup.classList.add('popup_opened');
    formName.value = profileName.textContent;
    formActivity.value = profileActivity.textContent;
}

/** Закрытие popap */
function closePopap() {
    popup.classList.remove('popup_opened');
}

/** Обработчик «отправки» формы */
function handleFormSubmit(evt) {
    evt.preventDefault(); /** Эта строчка отменяет стандартную отправку формы. */
    profileName.textContent = formName.value;
    profileActivity.textContent = formActivity.value;
    closePopap();
}

form.addEventListener('submit', handleFormSubmit);/** обработчик к форме: он будет следить за событием “submit” - «отправка» */
profileEditbutton.addEventListener('click', openedPopap);
popupCloseicon.addEventListener('click', closePopap);