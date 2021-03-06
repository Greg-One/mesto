'use strict';

export default class Popup {
  constructor(popupElement) {
    this._popupElement = document.querySelector(popupElement);
    this._handleEscClose = this._handleEscClose.bind(this);
    this.setEventListeners();
  }

  _closeButtonClick() {
    const closeButton = this._popupElement.querySelector(
      '.popup__close-button',
    );
    closeButton.addEventListener('click', () => {
      this.close();
    });
  }

  // Закрытие при нажатии вне формы
  _windowClick() {
    this._popupElement.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup')) {
        this.close();
      }
    });
  }

  // Закрытие попапа по Esc
  _handleEscClose(event) {
    const escapeKey = 'Escape';
    if (event.key === escapeKey) {
      this.close();
    }
  }

  // Открытие попапа
  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  // Закрытие попапа
  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._closeButtonClick();
    this._windowClick();
  }
}
