function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=o.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},o.parcelRequired7c6=s),s.register("kyEFX",(function(t,o){var n,r;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.ec11ad48.js","iaeKD":"logo_light.911f75c4.svg","gJlzP":"logo_dark.65f5fe07.svg"}'));var l;l=new URL(s("kyEFX").resolve("iaeKD"),import.meta.url).toString();var i;i=new URL(s("kyEFX").resolve("gJlzP"),import.meta.url).toString();const a=document.getElementById("slider"),c=document.body,d=document.getElementById("header"),u=document.getElementById("logo"),g=(document.querySelector("[data-menu-open]"),document.querySelector("[data-menu-close]"));document.getElementsByClassName("category_list")[0];function h(){d.style.setProperty("--header-bg-color-light","#111111"),d.style.setProperty("--header-border-color-light","#fff"),u.src=t(i),g.style.visibility="visible"}function m(){d.style.setProperty("--header-bg-color-light","#F9F9F9"),d.style.setProperty("--header-border-color-light","#000"),u.src=t(l)}"dark"===localStorage.getItem("theme")?(c.classList.add("dark-theme"),a.checked=!0,h()):(c.classList.remove("dark-theme"),a.checked=!1,m()),a.addEventListener("change",(function(){c.classList.toggle("dark-theme"),c.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),h()):(localStorage.setItem("theme","light"),m())})),(()=>{const e={openMenuBtn:document.querySelectorAll("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-hidden"),e.openMenuBtn.forEach((e=>e.classList.toggle("is-hidden"))),e.closeMenuBtn.classList.toggle("is-hidden")}e.openMenuBtn.forEach((e=>{e.addEventListener("click",t)})),e.closeMenuBtn.addEventListener("click",t)})();const f=document.querySelector(".js-list"),b=document.querySelector(".category_list"),p=document.querySelector(".title");function k(e){let t=e.target.textContent;var o;t=t.trimStart(),console.log(t),(o=t,fetch(`https://books-backend.p.goit.global/books/category?category=${o}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((e=>{f.innerHTML=y(e);const t=e[0].list_name.split(" "),o=t.splice(0,t.length-1).join(" "),n=t[t.length-1];p.innerHTML=`${o} <span class="books">${n}</span>`})).catch((e=>console.log(e)))}function y(e){return e.map((({_id:e,book_image:t,author:o,title:n})=>`<li class="item-image js-book-item" data-id="${e}" >\n        <img class="book-image"  src="${t}" width="335" height="485" alt="${n}">\n    <h3 class="book-title">${n}</h3>\n    <p class="author-name">${o}</p>\n      </li>`)).join("")}f.addEventListener("click",(function(e){const t=e.target.closest(".js-book-item");if(t){const{id:e}=t.dataset;(o=e,fetch(`https://books-backend.p.goit.global/books/${o}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((({_id:e,book_image:t,author:o,title:n})=>{basicLightbox.create(`<div class="modal">\n               <img src="${t}" alt="${e}"width="335" height="485">\n                <h3>${n}</h3>\n                <p>${o}</p>\n              </div>`).show()}))}var o})),fetch("https://books-backend.p.goit.global/books/top-books").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{f.insertAdjacentHTML("beforeend",e.map((({books:[{list_name:e}]})=>`\n  <li class="js-item item-list">\n        <h3 class="category-name">${e}</h3>\n        <ul class="category-menu js-add-list"></ul>\n        <button class="see-more-btn" type="button">SEE MORE</button>\n      </li>`)).join(""));const t=document.querySelectorAll(".js-add-list");for(let o=0;o<e.length;o+=1)t[o].insertAdjacentHTML("beforeend",y(e[o].books))})).catch((e=>console.log(e))),fetch("https://books-backend.p.goit.global/books/category-list").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{var t;b.insertAdjacentHTML("beforeend",(t=e,console.log(t),t.map((({list_name:e})=>`<li class="js-item-category category_item">\n  ${e}</li>`)).join(""))),b.addEventListener("click",k)})).catch((e=>console.log(e)));
//# sourceMappingURL=index.ec11ad48.js.map
