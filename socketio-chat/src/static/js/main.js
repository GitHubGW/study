(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

},{}],2:[function(require,module,exports){
"use strict";var _notification=require("./notification"),body=document.querySelector("body"),form=document.getElementById("jsForm"),isLogin=!1,NICKNAME="nickname",lsNickname=localStorage.getItem(NICKNAME),login=function(e){var n=io("/");n.emit("setNickname",{nickname:e}),n.on("newUser",function(e){var n=e.nickname,i="".concat(n," just joined");return(0,_notification.alertNotification)(i,"dodgerblue")})},handleFormSubmit=function(e){e.preventDefault();var n=form.querySelector("input");localStorage.setItem(NICKNAME,n.value),isLogin=!0,login(n.value),n.value=""};form&&form.addEventListener("submit",handleFormSubmit),null===lsNickname?isLogin=!1:(isLogin=!0,login(lsNickname));

},{"./notification":4}],3:[function(require,module,exports){
"use strict";require("./login"),require("./notification"),require("./chat"),require("./sockets");

},{"./chat":1,"./login":2,"./notification":4,"./sockets":5}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.alertNotification=void 0;var body=document.querySelector("body"),alertNotification=function(e,t){var o=document.createElement("div");o.innerHTML=e,o.style.backgroundColor=t,o.className="notification",body.appendChild(o)};exports.alertNotification=alertNotification;

},{}],5:[function(require,module,exports){
"use strict";

},{}]},{},[3]);
