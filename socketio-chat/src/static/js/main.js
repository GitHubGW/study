(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleGetMessage=exports.handleDeleteMessage=exports.handleGetDate=void 0;var chatBox=document.getElementById("jsChatBox"),chatForm=document.getElementById("jsChatForm"),time=document.querySelector(".chatHeader_second"),NICKNAME="nickname",handleGetDate=function(){var e=(new Date).getFullYear(),t=Number((new Date).getMonth())+1,n=(new Date).getDate(),a=["일","월","화","수","목","금","토"][(new Date).getDay()],o=document.createElement("div");o.className="date_container",o.innerHTML="".concat(e,"년 ").concat(t,"월 ").concat(n,"일 ").concat(a,"요일"),chatBox.appendChild(o)};exports.handleGetDate=handleGetDate;var handleDeleteMessage=function(e){var t=e.deleteMessageId;console.log("handleDeleteMessage",t);var n=document.getElementById(t);chatBox.removeChild(n)};exports.handleDeleteMessage=handleDeleteMessage;var handleDeleteBtn=function(e){var t=e.target.parentNode.id;console.log("id",t);var n=document.querySelector(".opponent_message");console.log("opponentMessage",n),io("/").emit("deleteBtn",{deleteMessageId:t})},handleGetMessage=function(e){var t=e.message,n=e.nickname,a=localStorage.getItem(NICKNAME),o=document.createElement("li");a!==n?(o.className="li_opponent",o.innerHTML='\n      <div class="opponent_container">\n        <div class="opponent_profile">\n          <img src="/images/profile.jpeg" alt="profile"/>\n        </div>\n        <div class="opponent_info">\n          <div class="opponent_nickname">\n            '.concat(n,'\n          </div>\n          <div class="opponent_message">\n            <span class="writer opponent">').concat(t,"</span>\n            <em>\n              ").concat((new Date).getHours()<10?"0".concat((new Date).getHours()):(new Date).getHours(),":").concat((new Date).getMinutes()<10?"0".concat((new Date).getMinutes()):(new Date).getMinutes(),"\n            </em>\n          </div>\n        </div>\n      </div>\n    ")):a===n&&(o.className="li_me",o.id=(new Date).getTime(),o.innerHTML="\n      <em>\n        ".concat((new Date).getHours()<10?"0".concat((new Date).getHours()):(new Date).getHours(),":").concat((new Date).getMinutes()<10?"0".concat((new Date).getMinutes()):(new Date).getMinutes(),'\n      </em>\n      <span class="writer me">').concat(t,'</span>\n      <button class="deleteBtn">Delete</button>\n    ')),chatBox.appendChild(o),document.querySelectorAll(".deleteBtn").forEach(function(e){e.addEventListener("click",handleDeleteBtn)})};exports.handleGetMessage=handleGetMessage;var handleChatForm=function(e){e.preventDefault();var t=chatForm.querySelector("input"),n=t.value;if(!(n.length<1)){var a=localStorage.getItem(NICKNAME);io("/").emit("sendMessage",{message:n,nickname:a}),t.value=""}};if(chatForm){var input=chatForm.querySelector("input");input.focus();var button=chatForm.querySelector("button");chatForm.addEventListener("keyup",function(e){input.value.length>=1?(button.style.color="black",chatForm.addEventListener("submit",handleChatForm)):button.style.color="#C0C0C0"}),setInterval(function(){time.innerHTML="".concat((new Date).getHours()<10?"0".concat((new Date).getHours()):(new Date).getHours(),":").concat((new Date).getMinutes()<10?"0".concat((new Date).getMinutes()):(new Date).getMinutes())},1e3)}

},{}],2:[function(require,module,exports){
"use strict";var _chat=require("./chat"),_notification=_interopRequireDefault(require("./notification"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var body=document.querySelector("body"),form=document.getElementById("jsForm"),NICKNAME="nickname",LOGIN="login",LOGOUT="logout",lsNickname=localStorage.getItem(NICKNAME),login=function(e){var t=io("/");t.emit("setNickname",{nickname:e}),t.on("userJoin",function(e){var t=e.nickname,o="".concat(t||"User","님이 들어왔습니다.");return(0,_notification.default)(o)}),t.on("userLeft",function(e){var t=e.nickname;if(void 0!==t){var o="".concat(t||"User","님이 나갔습니다.");return(0,_notification.default)(o)}}),t.on("getMessage",_chat.handleGetMessage),t.on("deleteMessage",_chat.handleDeleteMessage)},handleFormSubmit=function(e){e.preventDefault();var t=form.querySelector("input");localStorage.setItem(NICKNAME,t.value),body.className=LOGIN,login(t.value),t.value="",(0,_chat.handleGetDate)()},handleKeyUp=function(e){e.preventDefault();var t=form.querySelector("input"),o=form.querySelector("button");t.value.length>=1?(o.style.backgroundColor="#3B1C1C",o.style.color="white",o.style.borderColor="#3B1C1C",form.addEventListener("submit",handleFormSubmit)):(o.style.backgroundColor="#f6f6f6",o.style.color="#D3D3D3",o.style.borderColor="#f6f6f6",form.removeEventListener("submit",handleFormSubmit))};form&&form.addEventListener("keyup",handleKeyUp),null===lsNickname?body.className=LOGOUT:(body.className=LOGIN,login(lsNickname));

},{"./chat":1,"./notification":4}],3:[function(require,module,exports){
"use strict";require("./login"),require("./notification"),require("./chat");

},{"./chat":1,"./login":2,"./notification":4}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var body=document.querySelector("body"),chatBox=document.getElementById("jsChatBox"),alertNotification=function(e){var t=document.createElement("div");t.innerHTML=e,t.className="notification",chatBox.appendChild(t)},_default=alertNotification;exports.default=_default;

},{}]},{},[3]);
