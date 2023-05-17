export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.title;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    /** темплейт */
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    /** создать карточку */
    generateCard() {
        this._element = this._getTemplate();

        this._elementImage = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementTrash = this._element.querySelector('.element__trash');
        this._elementHeart = this._element.querySelector('.element__heart');

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;

        this._setEventListeners();
        return this._element;
    }

    /** лайк */
    _likeCard() {
        this._elementHeart.classList.toggle('element__heart_active');
    }

    /** удаление */
    _deleteCard() {
        this._element.remove();
    }

    /** обработчики */
    _setEventListeners() {
        this._elementHeart.addEventListener('click', () => {
            this._likeCard();
        });

        this._elementTrash.addEventListener('click', () => {
            this._deleteCard();
        });

        this._elementImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
}
