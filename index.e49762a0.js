!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},c=n.parcelRequired7c6;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},n.parcelRequired7c6=c),c.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var c={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},r=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),c.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),c.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),c.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),c.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o.default(e,t)};var n,o=(n=c("8NIkP"))&&n.__esModule?n:{default:n}})),c.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}})),c.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),r[e]=t),t}})),c("iE7OH").register(JSON.parse('{"EVgbq":"index.e49762a0.js","4Yfmz":"logo_light.911f75c4.svg","cdkBE":"logo_dark.65f5fe07.svg"}'));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){return i.default(e)||a.default(e,t)||u.default(e,t)||l.default()};var i=d(c("8slrw")),a=d(c("7AJDX")),l=d(c("ifqQW")),u=d(c("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var f;f=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("4Yfmz");var m;m=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("cdkBE");var g=document.getElementById("slider"),h=document.body,p=document.getElementById("header"),b=document.getElementById("logo"),v=(document.querySelector("[data-menu-open]"),document.querySelector("[data-menu-close]"));document.getElementsByClassName("category_list")[0];function y(){p.style.setProperty("--header-bg-color-light","#111111"),p.style.setProperty("--header-border-color-light","#fff"),b.src=t(m),v.style.visibility="visible"}function k(){p.style.setProperty("--header-bg-color-light","#F9F9F9"),p.style.setProperty("--header-border-color-light","#000"),b.src=t(f)}console.log("Fqwe"),"dark"===localStorage.getItem("theme")?(h.classList.add("dark-theme"),g.checked=!0,y()):(h.classList.remove("dark-theme"),g.checked=!1,k()),g.addEventListener("change",(function(){h.classList.toggle("dark-theme"),h.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),y()):(localStorage.setItem("theme","light"),k())})),function(){var e={openMenuBtn:document.querySelectorAll("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-hidden"),e.openMenuBtn.forEach((function(e){return e.classList.toggle("is-hidden")})),e.closeMenuBtn.classList.toggle("is-hidden")}e.openMenuBtn.forEach((function(e){e.addEventListener("click",t)})),e.closeMenuBtn.addEventListener("click",t)}(),document.querySelectorAll(".curent-link").forEach((function(e){e.href===window.location.href?e.classList.add("curent-link"):e.classList.remove("curent-link")}));var E=document.querySelector(".js-list"),S=document.querySelector(".category_list"),L=document.querySelector(".title");function _(e){return fetch("https://books-backend.p.goit.global/books/category?category=".concat(e)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}function w(e){var t=e.target.textContent;t=t.trimStart(),console.log(t),_(t).then((function(e){E.innerHTML=O(e);var t=e[0].list_name.split(" "),n=t.splice(0,t.length-1).join(" "),o=t[t.length-1];L.innerHTML="".concat(n,' <span class="books">').concat(o,"</span>")})).catch((function(e){return console.log(e)}))}function O(e){return e.map((function(e){var t=e._id,n=e.book_image,o=e.author,r=e.title;return'<li class="item-image js-book-item" data-id="'.concat(t,'" >\n        <img class="book-image"  src="').concat(n,'" width="335" height="485" alt="').concat(r,'">\n    <h3 class="book-title">').concat(r,'</h3>\n    <p class="author-name">').concat(o,"</p>\n      </li>")})).join("")}function x(e){if(e.target.closest(".see-more-btn")){var t=e.currentTarget.children[0].textContent;_(t=t.trimStart()).then((function(e){E.innerHTML=O(e),function(e){var t=e.split(" "),n=t.splice(0,t.length-1).join(" "),o=t[t.length-1];L.innerHTML="".concat(n,' <span class="books">').concat(o,"</span>")}(t)})).catch((function(e){return console.log(e)}))}}E.addEventListener("click",(function(e){var t=e.target.closest(".js-book-item");if(t){var n=t.dataset.id;(o=n,fetch("https://books-backend.p.goit.global/books/".concat(o)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((function(e){var t=e._id,n=e.book_image,o=e.author,r=e.title,c=e.description,s=basicLightbox.create('<div class="modal">\n      <button type="button" class="btn-modal-close" data-modal-close>\n      <svg width="24" height="24">\n        <use href="./images/icons-sprite/symbol-defs.svg#icon-x-closer"></use>\n      </svg>\n    </button>\n        <div class="modal-imgDescript">\n               <img src="'.concat(n,'" alt="').concat(t,'"width="335" height="485">\n                <div>\n                <h3>').concat(r,'</h3>\n                <p class="modal-author">').concat(o,'</p>\n                <p class="modal-description">').concat(c,'</p>\n                </div>\n       </div>    \n       <div class="modal-buttons">     \n    <button class="add-remove-btn">Add to shoping list</button>\n    <span class="congratulations"\n      >Сongratulations! You have added the book to the shopping list. To delete,\n      press the button "Remove from the shopping list".</span\n    >\n    </div>\n              </div>'));s.show();var i=document.querySelector(".modal"),a=s.element().querySelector(".add-remove-btn"),l=s.element().querySelector(".congratulations");"BOOK"==localStorage.getItem(t)?(a.textContent="REMOVE FROM THE SHOPPING LIST",l.style.display="block"):(a.textContent="ADD TO SHOPPING LIST",l.style.display="none"),a.addEventListener("click",(function(){a.classList.add("clicked"),"BOOK"==localStorage.getItem(t)?(localStorage.removeItem(t),a.textContent="ADD TO SHOPPING LIST",l.style.display="none",i.classList.remove("active")):(localStorage.setItem(t,"BOOK"),a.textContent="REMOVE FROM THE SHOPPING LIST",l.style.display="block",i.classList.add("active")),setTimeout((function(){a.classList.remove("clicked")}),100)}))}))}var o})),fetch("https://books-backend.p.goit.global/books/top-books").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){E.insertAdjacentHTML("beforeend",e.map((function(e){var n=t(s)(e.books,1)[0].list_name;return'\n  <li class="js-item item-list">\n        <h3 class="category-name">'.concat(n,'</h3>\n        <ul class="category-menu js-add-list"></ul>\n        <button class="see-more-btn" type="button">SEE MORE</button>\n      </li>')})).join(""));for(var n=document.querySelectorAll(".js-add-list"),o=document.querySelectorAll(".js-item"),r=0;r<e.length;r+=1)n[r].insertAdjacentHTML("beforeend",O(e[r].books)),o[r].addEventListener("click",x)})).catch((function(e){return console.log(e)})),fetch("https://books-backend.p.goit.global/books/category-list").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){var t;S.insertAdjacentHTML("beforeend",(t=e,console.log(t),t.map((function(e){var t=e.list_name;return'<li class="js-item-category category_item">\n  '.concat(t,"</li>")})).join(""))),S.addEventListener("click",w)})).catch((function(e){return console.log(e)})),{el:document.querySelector(".btn-up"),show:function(){this.el.classList.remove("btn-up_hiden")},hide:function(){this.el.classList.add("btn-up_hiden")},addEventListener:function(){var e=this;window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>200?e.show():e.hide()})),document.querySelector(".btn-up").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}}.addEventListener()}();
//# sourceMappingURL=index.e49762a0.js.map
