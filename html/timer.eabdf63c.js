!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var i={id:t,exports:{}};return r[t]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequired7c6=i);var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var s={};function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(t,e,r){e&&o(t.prototype,e);r&&o(t,r);return t};var l=function(){"use strict";function e(r){var n=r.selector,i=r.value,s=void 0===i?1:i;t(a)(this,e),this.timerStartValue=s,this.parent=document.querySelector(n),this.parent.insertAdjacentHTML("beforeend","\n<div class='timer'>\n<span class='timer-value'>yyyy-mm-dd hh:mm:ss</span>\n<button data-action=\"timer-start\">start</button>\n<button data-action=\"timer-stop\" disabled>stop</button>\n</div>"),this.value=this.parent.querySelector(".timer-value"),this.startBtn=this.parent.querySelector('[data-action="timer-start"]'),this.stopBtn=this.parent.querySelector('[data-action="timer-stop"]'),this.render(),this.startBtn.addEventListener("click",this.start.bind(this)),this.stopBtn.addEventListener("click",this.stop.bind(this))}return t(s)(e,[{key:"render",value:function(){this.value.textContent=this.timerStartValue,this.timerStartValue+=1}},{key:"start",value:function(){this.timerId=setInterval(this.render.bind(this),1e3),this.startBtn.setAttribute("disabled",!0),this.stopBtn.removeAttribute("disabled")}},{key:"stop",value:function(){clearInterval(this.timerId),this.startBtn.removeAttribute("disabled"),this.stopBtn.setAttribute("disabled",!0)}}]),e}(),u=i("jR9u2");document.querySelector("body").insertAdjacentHTML("afterbegin","<div class='current-date'>TIME NOW: <span class='current-date-value'>".concat(t(u)(Date.now()).format("YYYY-MM-DD "),"</span></div>"));new l({selector:"#timer-1",value:10}),new l({selector:"#timer-2",value:20}),new l({selector:"#timer-3"})}();
//# sourceMappingURL=timer.eabdf63c.js.map
