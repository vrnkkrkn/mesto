export default class Card {
    constructor(data, templateSelector, handleCardClick, submitWithPopup, { handleLikeCard }) {
        this._name = data.name;
        this._link = data.link;
        this._myId = data.myId;
        this._ownerId = data.owner._Id;
        this._likes = data.likes;
        this._cardId = data._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeCard = handleLikeCard;
        this._submitWithPopup = submitWithPopup;
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
        this._heartSum = this._element.querySelector('.element__heart-sum');

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;

        this._heartSum.textContent = this._likes.length;

        this._showLikeStatus();
        this._changeVisibilityButtonTrash();
        this._setEventListeners();

        return this._element;
    }

    /** постановка лайка */
    likeCard() {
        this._elementHeart.classList.add('element__heart_active');
        this.isLike = true;
    }

    /** снятие лайка */
    deleteLikeCard() {
        this._elementHeart.classList.remove('element__heart_active');
        this.isLike = false;
    }

    /** отображение лайка*/
    _showLikeStatus() {
        if (this._checkUserLike()) {
            this.likeCard();
        } else {
            this.deleteLikeCard();
        }
    };

    /** количество лайков */
    showSumLikes(element) {
        this._heartSum.textContent = element.length;
    }

    /** проверка наличия лайка */
    _checkUserLike() {
        return this._likes.some(like => like._id === this._myId);
    }

    /** удаление карточки*/
    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _handleDeleteCard() {
        this._submitWithPopup({ element: this, id: this._cardId });
    }

    /** скрывает корзину, если id не мой */
    _changeVisibilityButtonTrash() {
        if (this._myId === this._ownerId) {
            this._elementTrash.classList.add('element__trash_type_visible')
        } else {
            this._elementTrash.classList.add('element__trash_type_invisible');
        }
    }

    /** возвращаем id card */
    returnCardId() {
        return this._cardId;
    }

    /** обработчики */
    _setEventListeners() {
        this._elementHeart.addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._elementTrash.addEventListener('click', () => {
            this._handleDeleteCard();
        });

        this._elementImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
}