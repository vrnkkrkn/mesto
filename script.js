let popup = document.querySelector('.popup');
let popupCloseicon = document.querySelector('.popup__close-icon');
let popupContainer = document.querySelector('.popup__container');
let popupTitle = document.querySelector('.popup__title');
let popupName = document.querySelector('.popup__name');
let popupActivity = document.querySelector('.popup__activity');
let popupButton = document.querySelector('.popup__button');
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
let profileEditbutton = document.querySelector('.profile__edit-button');

// Открытие popap
function openedPopap() {
    popup.classList.add('popup_opened');
}
profileEditbutton.addEventListener('click', openedPopap);

// Закрытие popap
function closePopap() {
    popup.classList.remove('popup_opened');
}
popupCloseicon.addEventListener('click', closePopap);

// Поля формы
function elementsForm() {
    popupName.value = profileName.textContent;
    popupActivity.value = profileActivity.textContent;
}
profileEditbutton.addEventListener('click', elementsForm);

// Кнопка сохранить 
function saveButton() {
    closePopap();
}
popupButton.addEventListener('click', saveButton);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = popupName.value;
    profileActivity.textContent = popupActivity.value;
    closePopap();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popup.addEventListener('submit', handleFormSubmit); 