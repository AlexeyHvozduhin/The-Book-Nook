if(localStorage.length>1){const i=document.querySelector(".empty-shopping-list-div"),n=document.querySelector(".shopping-book-list");for(const i in localStorage)"BOOK"==localStorage[i]&&(o=i,fetch(`https://books-backend.p.goit.global/books/${o}`).then((o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}))).then((({_id:o,book_image:i,author:s,title:t,description:a,list_name:e})=>{n.insertAdjacentHTML("beforeend",`<li class="shoping-book-card">\n      <div class="shoping-book-card-img">\n        <img src="${i}" alt="${o}"width="335" height="485">\n      </div>\n      <div class="shoping-book-card-text">\n        <div class="shoping-book-card-title_and_ganre">\n            <h3 class="shoping-book-card-title">${t}</h3>\n            <h4 class="shoping-book-card-ganre">${e}</h4>\n            <p class="shoping-book-card-description">${a}</p>\n        </div>\n        <h4 class="shoping-book-card-author">${s}</h4>\n      </div>\n      <div class="shoping-list-images">\n          <ul class="list-images">\n            <li><a href="https://www.amazon.com/" class="image-link image-link-amazon"></a></li>\n            <li><a href="https://www.openebooks.org/" class="image-link image-link-openBook"></a></li>\n            <li><a href="https://bookshop.org/" class="image-link image-link-bookShop"></a></li>\n          </ul>\n        </div>\n      <button class="shoping-list-btn">\n      \n    </button>\n    </li>`)}));i.style.display="none"}else{document.querySelector(".empty-shopping-list-div").style.display="block"}var o;
//# sourceMappingURL=shoping-list.9a8e9583.js.map
