'use strict';

import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupElement, handleFormSubmit }, formSelector) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._formSelector = formSelector;
    this._setEventListeners();
  }

  // Получение значений инпутов
  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  _setEventListeners() {
    this._popupElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
  }
}
