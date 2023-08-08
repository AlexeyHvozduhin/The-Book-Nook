const e=document.getElementById("slider"),t=document.body,o=document.getElementById("header"),n=(document.getElementById("logo"),document.querySelector("[data-menu-open]"),document.querySelector("[data-menu-close]")),s=document.getElementsByClassName("category_list")[0];document.getElementsByClassName("logo")[0];function a(){o.style.setProperty("--header-bg-color-light","#111111"),o.style.setProperty("--header-border-color-light","#fff"),n.style.visibility="visible"}function l(){o.style.setProperty("--header-bg-color-light","#f9f9f9"),o.style.setProperty("--header-border-color-light","#000")}"dark"===localStorage.getItem("theme")?(t.classList.add("dark-theme"),s.classList.add("dark-theme"),e.checked=!0,a()):(t.classList.remove("dark-theme"),s.classList.remove("dark-theme"),e.checked=!1,l()),e.addEventListener("change",(function(){t.classList.toggle("dark-theme"),s.classList.toggle("dark-theme"),t.classList.contains("dark-theme")?(localStorage.setItem("theme","dark"),a()):(localStorage.setItem("theme","light"),l())})),(()=>{const e={openMenuBtn:document.querySelectorAll("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-hidden"),e.openMenuBtn.forEach((e=>e.classList.toggle("is-hidden"))),e.closeMenuBtn.classList.toggle("is-hidden")}e.openMenuBtn.forEach((e=>{e.addEventListener("click",t)})),e.closeMenuBtn.addEventListener("click",t)})();const r=document.querySelector(".js-list"),c=document.querySelector(".category_list");document.querySelector(".js-title");function i(e){let t=e.target.textContent;var o;t=t.trimStart(),console.log(t),(o=t,fetch(`https://books-backend.p.goit.global/books/category?category=${o}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((e=>{r.innerHTML=d(e)})).catch((e=>console.log(e)))}function d(e){return e.map((({_id:e,book_image:t,author:o,title:n})=>`<li class="item-image js-book-item" data-id="${e}" >\n        <img class="book-image"  src="${t}" width="335" height="485" alt="${n}">\n    <h3 class="book-title">${n}</h3>\n    <p class="author-name">${o}</p>\n      </li>`)).join("")}r.addEventListener("click",(function(e){const t=e.target.closest(".js-book-item");if(t){const{id:e}=t.dataset;(o=e,fetch(`https://books-backend.p.goit.global/books/${o}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((({_id:e,book_image:t,author:o,title:n})=>{basicLightbox.create(`<div class="modal">\n               <img src="${t}" alt="${e}"width="335" height="485">\n                <h3>${n}</h3>\n                <p>${o}</p>\n              </div>`).show()}))}var o})),fetch("https://books-backend.p.goit.global/books/top-books").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{r.insertAdjacentHTML("beforebegin",`<h2 class="title">${function(e){return Array.isArray(e)?"Books":e.textContent}(e)}<span class="books"></span></h2>`),console.log(e.textContent),r.insertAdjacentHTML("beforeend",e.map((({books:[{list_name:e}]})=>`\n  <li class="js-item item-list">\n        <h3 class="category-name">${e}</h3>\n        <ul class="category-menu js-add-list"></ul>\n        <button class="see-more-btn" type="button">See more</button>\n      </li>`)).join(""));const t=document.querySelectorAll(".js-add-list");for(let o=0;o<e.length;o+=1)t[o].insertAdjacentHTML("beforeend",d(e[o].books))})).catch((e=>console.log(e))),fetch("https://books-backend.p.goit.global/books/category-list").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{var t;c.insertAdjacentHTML("beforeend",(t=e,console.log(t),t.map((({list_name:e})=>`<li class="js-item-category category_item">\n  ${e}</li>`)).join(""))),c.addEventListener("click",i)})).catch((e=>console.log(e)));
//# sourceMappingURL=index.1c47e61a.js.map
