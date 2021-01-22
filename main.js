/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o,i,a,c,u,s,l,f){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t,this._image=n,this._cardId=r,this._userId=o,this._ownerId=i,this._likes=a,this._handleCardClick=c,this._handleLikeClick=u,this._handleRemoveClick=s,this._template=l,this._data=f}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(this._data.cardSelector).cloneNode(!0)}},{key:"getCardLike",value:function(){return this._likeButton.classList.contains(this._data.cardActiveLikeClass)}},{key:"setCardLike",value:function(t){var e=this;this._card.querySelector(this._data.cardLikesCount).textContent=t.length,-1!==t.findIndex((function(t){return t._id===e._userId}))?this._likeButton.classList.add(this._data.cardActiveLikeClass):this._likeButton.classList.remove(this._data.cardActiveLikeClass)}},{key:"deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"_setEventListeners",value:function(){var t=this;this._card.querySelector(this._data.cardLikeButtonSelector).addEventListener("click",(function(){t._handleLikeClick(t)})),this._card.querySelector(this._data.cardRemoveButtonSelector).addEventListener("click",(function(){t._handleRemoveClick(t)})),this._card.querySelector(this._data.cardImageSelector).addEventListener("click",this._handleCardClick)}},{key:"generateCardLayout",value:function(){return this._card=this._getTemplate(),this._setEventListeners(),this._card.querySelector(this._data.cardTitleSelector).textContent=this._title,this._card.querySelector(this._data.cardImageSelector).src=this._image,this._card.querySelector(this._data.cardImageSelector).setAttribute("alt","Изображение на фотографии: ".concat(this._title)),this._likeButton=this._card.querySelector(this._data.cardLikeButtonSelector),this.setCardLike(this._likes),this._ownerId===this._userId&&(this._card.querySelector(this._data.cardRemoveButtonSelector).style.display="block"),this._card}}])&&t(n.prototype,r),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._form=n,this._button=this._form.querySelector(this._data.submitButtonSelector),this._inputList=this._form.querySelectorAll(this._data.inputSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t){this._form.querySelector("#".concat(t.id,"-error")).textContent=t.validationMessage,t.classList.add(this._data.inputInvalidClass)}},{key:"_hideInputError",value:function(t){this._form.querySelector("#".concat(t.id,"-error")).textContent="",t.classList.remove(this._data.inputInvalidClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"disableActiveButton",value:function(){this._button.classList.add(this._data.inactiveButtonClass),this._button.disabled=!0}},{key:"_toggleButtonState",value:function(){this._form.checkValidity()?(this._button.classList.remove(this._data.inactiveButtonClass),this._button.disabled=!1):this.disableActiveButton()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"clearPopupInputs",value:function(){var t=this;this._form.reset(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(e.prototype,r),t}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"addCustomItem",value:function(t){this._container.prepend(t)}}])&&o(e.prototype,n),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){var n=e.nameSelector,r=e.jobSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(t){var e=t.profileName,n=t.profileOccupation;this._name.textContent=e,this._job.textContent=n}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}}])&&a(e.prototype,n),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this.setEventListeners()}var e,n;return e=t,(n=[{key:"_closeButtonClick",value:function(){var t=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){t.close()}))}},{key:"_windowClick",value:function(){var t=this;this._popupElement.addEventListener("mousedown",(function(e){e.target.classList.contains("popup")&&t.close()}))}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._closeButtonClick(),this._windowClick()}}])&&u(e.prototype,n),t}();function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function a(t,e){var n,r=t.popupElement,o=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,r))._handleFormSubmit=o,n._formSelector=e,n._setEventListeners(),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=this._popupElement.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"_setEventListeners",value:function(){var t=this;this._popupElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"setSubmitButtonText",value:function(t){this._submitButton=this._popupElement.querySelector(".popup__submit-button"),this._submitButton.textContent=t}},{key:"close",value:function(){p(_(a.prototype),"close",this).call(this)}}])&&f(e.prototype,n),a}(s);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popupImage=e._popupElement.querySelector(".popup__photo"),e._popupImageTitle=e._popupElement.querySelector(".popup__card-title"),e}return e=a,(n=[{key:"open",value:function(t){b(g(a.prototype),"open",this).call(this),this._popupImage.src=t.src,this._popupImageTitle.textContent=t.textContent,this._popupImage.alt="Изображение на фотографии: ".concat(t.textContent)}}])&&v(e.prototype,n),a}(s);function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w,L=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"editUserInfo",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.job})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"addCustomCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"removeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t._cardId),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"addCardLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t._cardId),{method:"PUT",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"removeCardLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t._cardId),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"setNewAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}}])&&E(e.prototype,n),t}(),I={cardSelector:".card",cardLikeButtonSelector:".card__like-button",cardActiveLikeClass:"card__like-button_active",cardRemoveButtonSelector:".card__remove-button",cardTitleSelector:".card__title",cardImageSelector:".card__image",cardLikesCount:".card__like-count"},j={formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputInvalidClass:"popup__input_invalid",inputErrorSelector:".popup__input-error"},O=document.querySelector(".profile"),P=document.querySelector(".popup_profile"),q=O.querySelector(".profile__edit-button"),T=P.querySelector(".popup__input_type_name"),B=P.querySelector(".popup__input_type_occupation"),x=O.querySelector(".profile__add-button"),A=O.querySelector(".profile__avatar-edit"),U=document.querySelector(".cards"),R=document.querySelector(".popup__container_profile"),V=document.querySelector(".popup__container_card"),D=document.querySelector(".popup__container_avatar"),F=document.querySelector(".popup__container_remove");function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var J=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"0317c846-fa90-4414-9658-7dd1e3d83b45","Content-Type":"application/json"}}),H=new r(j,R);H.enableValidation();var M=new r(j,V);M.enableValidation();var z=new r(j,D);z.enableValidation();var $=new c({nameSelector:".profile__name",jobSelector:".profile__occupation",avatarSelector:".profile__avatar"}),G=new y({popupElement:".popup_profile",handleFormSubmit:function(t){G.setSubmitButtonText("Сохранение..."),J.editUserInfo(t).then((function(t){$.setUserInfo({profileName:t.name,profileOccupation:t.about}),G.close()})).finally(setTimeout((function(){return G.setSubmitButtonText("Сохранить")}),1500))}},R),K=new y({popupElement:".popup_avatar",handleFormSubmit:function(t){K.setSubmitButtonText("Сохранение..."),J.setNewAvatar(t).then((function(t){$.setUserAvatar(t.avatar),K.close()})).finally(setTimeout((function(){return K.setSubmitButtonText("Сохранить")}),1500))},avatarEditForm:D});function Q(t){return new e(t.name,t.link,t._id,w,t.owner._id,t.likes,Z,tt,et,".card-template",I).generateCardLayout()}var W=new i({renderer:function(t){W.addItem(Q(t))}},U),X=new y({popupElement:".popup_card",handleFormSubmit:function(t){X.setSubmitButtonText("Создание..."),J.addCustomCard(t).then((function(t){W.addCustomItem(Q(t)),X.close()})).finally(setTimeout((function(){return X.setSubmitButtonText("Создать")}),1500))}},V),Y=new C(".popup_image");function Z(t){var e={};e.src=t.target.src,e.textContent=t.target.closest(".card").querySelector(".card__title").textContent,Y.open(e)}function tt(t){t.getCardLike()?J.removeCardLike(t).then((function(e){return t.setCardLike(e.likes)})).catch((function(t){return console.log(t)})):J.addCardLike(t).then((function(e){return t.setCardLike(e.likes)})).catch((function(t){return console.log(t)}))}function et(t){nt.card=t,nt.open()}var nt=new y({popupElement:".popup_remove",handleFormSubmit:function(){nt.setSubmitButtonText("Удаление..."),J.removeCard(nt.card).then((function(){nt.card.deleteCard(),nt.close()})).catch((function(t){console.log(t)})).finally(setTimeout((function(){return nt.setSubmitButtonText("Да")}),1500))},cardRemoveForm:F}),rt=[J.getUserInfo(),J.getInitialCards()];Promise.all(rt).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,n)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];w=o._id,$.setUserInfo({profileName:o.name,profileOccupation:o.about}),$.setUserAvatar(o.avatar),W.renderItems(i)})).catch((function(t){return console.log("Ошибка: ".concat(t))})),q.addEventListener("click",(function(){H.clearPopupInputs(),H.disableActiveButton();var t=$.getUserInfo();T.value=t.name,B.value=t.job,G.open()})),x.addEventListener("click",(function(){M.clearPopupInputs(),M.disableActiveButton(),X.open()})),A.addEventListener("click",(function(){z.clearPopupInputs(),z.disableActiveButton(),K.open()}))})();