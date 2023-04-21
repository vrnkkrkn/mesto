 export default class Card {
    constructor(card, templateSelector) {
        this._name = card.name;
        this._link = card.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._card = this._getTemplate();

        this._elementImage = this._card.querySelector('.element__image');
        this._elementTitle = this._card.querySelector('.element__title');
        this._elementTrash = this._card.querySelector('.element__trash');
        this._elementHeart = this._card.querySelector('.element__heart');

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;

        this._setEventListeners();
        return this._card;
    }

    /** лайк */
    _likeCard() {
        this._elementHeart.classList.toggle('element__heart_active');
    }

    /** удаление */
    _deleteCard() {
        this._card.remove();

    }

    _openPopupImage() {
        this._popupPicture.src = this._link;
        this._popupPicture.alt = this._name;
        this._popupText.textContent = this._name;
        this._openPopup(this._popupImage);
    }


    _setEventListeners() {
        this._elementHeart.addEventListener('click', () => {
            this._likeCard();
        });

        this.elementTrash.addEventListener('click', () => {
            this._deleteCard();
        });

        this._elementImage.addEventListener('click', () => {
            this.openPopupImage();
        });
    }
    }
  