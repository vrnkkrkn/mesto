(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function r(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(r)?r:String(r)}var n=function(){function e(t,n){var o,i,a,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,a=function(e){u._errorElement=u._form.querySelector("#".concat(e.id,"-error")),e.classList.remove(u._inputErrorClass),u._errorElement.classList.remove(u._errorClass),u._errorElement.textContent=""},(i=r(i="_hideError"))in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a,this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var n,o;return n=e,(o=[{key:"_showError",value:function(e,t){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorElement.textContent=t,this._errorElement.classList.add(this._errorClass)}},{key:"_checkItemValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._itemList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._button=this._form.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._itemList.forEach((function(t){t.addEventListener("input",(function(){e._checkItemValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvaliditem",value:function(){return this._itemList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvaliditem()?(this._button.disabled=!0,this._button.classList.add(this._inactiveButtonClass)):(this._button.disabled=!1,this._button.classList.remove(this._inactiveButtonClass))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._itemList.forEach((function(t){e._hideError(t)}))}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var a=function(){function e(t,r,n,o,i){var a=i.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._myId=t.myId,this._ownerId=t.owner._Id,this._likes=t.likes,this._cardId=t._id,this._templateSelector=r,this._handleCardClick=n,this._handleLikeCard=a,this._submitWithPopup=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementTitle=this._element.querySelector(".element__title"),this._elementTrash=this._element.querySelector(".element__trash"),this._elementHeart=this._element.querySelector(".element__heart"),this._heartSum=this._element.querySelector(".element__heart-sum"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementTitle.textContent=this._name,this._heartSum.textContent=this._likes.length,this._showLikeStatus(),this._changeVisibilityButtonTrash(),this._setEventListeners(),this._element}},{key:"likeCard",value:function(){this._elementHeart.classList.add("element__heart_active"),this.isLike=!0}},{key:"deleteLikeCard",value:function(){this._elementHeart.classList.remove("element__heart_active"),this.isLike=!1}},{key:"_showLikeStatus",value:function(){this._checkUserLike()?this.likeCard():this.deleteLikeCard()}},{key:"showSumLikes",value:function(e){this._heartSum.textContent=e.length}},{key:"_checkUserLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._myId}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleDeleteCard",value:function(){this._submitWithPopup({element:this,id:this._cardId})}},{key:"_changeVisibilityButtonTrash",value:function(){this._myId===this._ownerId?this._elementTrash.classList.add("element__trash_type_visible"):this._elementTrash.classList.add("element__trash_type_invisible")}},{key:"returnCardId",value:function(){return this._cardId}},{key:"_setEventListeners",value:function(){var e=this;this._elementHeart.addEventListener("click",(function(){e._handleLikeCard()})),this._elementTrash.addEventListener("click",(function(){e._handleDeleteCard()})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var l=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}},{key:"addItemAppend",value:function(e){this._container.append(e)}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function p(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}var y=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.close()},(n=p(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(t),this._popupCloseIcon=this._popup.querySelector(".popup__close-icon")}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseIcon.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},v.apply(this,arguments)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(n);if(o){var r=_(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupPicture=t._popup.querySelector(".popup__picture"),t._popupText=t._popup.querySelector(".popup__text"),t}return t=a,(r=[{key:"open",value:function(e,t){v(_(a.prototype),"open",this).call(this),this._popupPicture.src=t,this._popupPicture.alt=e,this._popupText.textContent=e}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}var w=function(){function e(t){var r=t.userNameSelector,n=t.userActivitySelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._activity=document.querySelector(n),this._avatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,activity:this._activity.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.activity,n=e.avatar;this._userName.textContent=t,this._activity.textContent=r,this._avatar.src=n}}])&&g(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},j.apply(this,arguments)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(n);if(o){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._handleFormSubmit=t,r._form=r._popup.querySelector(".form"),r._itemList=r._form.querySelectorAll(".form__item"),r._submitButton=r._popup.querySelector(".popup__button"),r}return t=a,(r=[{key:"_getInputValues",value:function(){var e=this;return this._itemValues={},this._itemList.forEach((function(t){e._itemValues[t.name]=t.value})),this._itemValues}},{key:"setEventListeners",value:function(){var e=this;j(P(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitButton.textContent="Сохранение...",e._handleFormSubmit(e._getInputValues(),e._submitButton)}))}},{key:"close",value:function(){j(P(a.prototype),"close",this).call(this),this._form.reset()}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers,this._authorization=t.headers.authorization}var t,r;return t=e,(r=[{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkRes)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkRes)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.userName,about:e.activity})}).then(this._checkRes)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.link})}).then(this._checkRes)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkRes)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkRes)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkRes)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkRes)}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,N(n.key),n)}}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},B.apply(this,arguments)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function N(e){var t=function(e,t){if("object"!==R(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===R(t)?t:String(t)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(n);if(o){var r=A(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}(this,e)});function a(e,t){var r,n,o,u,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=x(n=i.call(this,e)),c=function(e){var t=e.element,o=e.id;B((r=x(n),A(a.prototype)),"open",r).call(r),n._id=o,n._element=t},(u=N(u="open"))in o?Object.defineProperty(o,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[u]=c,n._handleSubmit=t,n._form=n._popup.querySelector(".form"),n}return t=a,(r=[{key:"setEventListeners",value:function(){var e=this;B(A(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit({element:e._element,id:e._id})}))}}])&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(y),z={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"form__item_type_error",errorClass:"form__item-error_visible"},D=document.querySelector(".form_type_edit"),H=document.querySelector(".form_type_avatar"),J=document.querySelector(".form__item_el_name"),F=document.querySelector(".form__item_el_activity"),M=document.querySelector(".profile__edit-button"),W=document.querySelector(".profile__icon"),$=document.querySelector(".form_type_add"),G=document.querySelector(".profile__add-button");function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Q=new n(z,D),X=new n(z,$),Y=new n(z,H);Q.enableValidation(),X.enableValidation(),Y.enableValidation();var Z=new T({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"00d72194-808b-451d-881a-fdbd02e835f2","Content-Type":"application/json"}});Promise.all([Z.getInitialCards(),Z.getUserInfo()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];o.forEach((function(e){e.myId=i._id})),ae.setUserInfo({userName:i.name,activity:i.about,avatar:i.avatar}),re.renderItems(o)})).catch((function(e){console.log(e)}));var ee=new V(".popup_type_confirm",(function(e){var t=e.element,r=e.id;Z.deleteCard(r).then((function(){t.deleteCard(),ee.close()})).catch((function(e){console.error(e)}))}));function te(e){var t=new a(e,"#element-template",oe,ee.open,{handleLikeCard:function(){t.isLike?Z.deleteLike(t.returnCardId()).then((function(e){t.deleteLikeCard(),t.showSumLikes(e.likes)})).catch((function(e){console.log(e)})):Z.putLike(t.returnCardId()).then((function(e){t.likeCard(),t.showSumLikes(e.likes)})).catch((function(e){console.log(e)}))}});return t.generateCard()}ee.setEventListeners();var re=new l((function(e){re.addItemAppend(te(e))}),".elements"),ne=new b(".popup_type_image");function oe(e,t){ne.open(e,t)}ne.setEventListeners();var ie=new C(".popup_type_add",(function(e,t){Z.addNewCard(e).then((function(e){re.addItemPrepend(te(e)),ie.close()})).catch((function(e){console.log(e)})).finally((function(){t.textContent="Сохранить"}))}));G.addEventListener("click",(function(){ie.open(),X.resetValidation()})),ie.setEventListeners();var ae=new w({userNameSelector:".profile__name",userActivitySelector:".profile__activity",userAvatarSelector:".profile__avatar"}),ue=new C(".popup_type_edit",(function(e,t){Z.setUserInfo(e).then((function(e){ae.setUserInfo({userName:e.name,activity:e.about,avatar:e.avatar}),ue.close()})).catch((function(e){console.log(e)})).finally((function(){t.textContent="Сохранить"}))}));ue.setEventListeners();var ce=new C(".popup_type_avatar",(function(e,t){Z.setAvatar(e).then((function(e){ae.setUserInfo({userName:e.name,activity:e.about,avatar:e.avatar}),ce.close()})).catch((function(e){console.log(e)})).finally((function(){t.textContent="Сохранить"}))}));ce.setEventListeners(),W.addEventListener("click",(function(){ce.open(),Y.resetValidation()})),M.addEventListener("click",(function(){ue.open(),J.value=ae.getUserInfo().userName,F.value=ae.getUserInfo().activity,Q.resetValidation()}))})();