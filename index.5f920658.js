function e(e){return fetch(`https://newsapi.org/v2/everything?q=${e}&apiKey=545b320259f148c98f761a8b0ed17e83`).then((e=>e.json())).catch((e=>console.log(e)))}const t={form:document.querySelector(".news-form"),list:document.querySelector(".news-list"),submitBtn:document.querySelector(".news-button"),loader:document.querySelector(".news-loader")},s=({source:{name:e},publishedAt:t,title:s,url:n,urlToImage:l})=>`<li class="news-item" data-is='${t}'>\n  <img class='news-icon' src="${l}" alt="${s}">\n  <div class="item-text-box">\n       <a href="${n}" target="_blank">${s}</a>\n   <p>${e}</p>\n        </div>\n    </li>`;t.form.addEventListener("submit",(n=>{n.preventDefault(),t.loader.classList.add("show"),t.submitBtn.setAttribute("disabled",!0);const{value:l}=n.target.elements.query;e(l).then((({articles:e})=>{(e=>{const n=e.map(s);t.list.innerHTML=n.join("")})(e),t.list.classList.add("news-show")})).finally((()=>{t.loader.classList.remove("show"),t.submitBtn.removeAttribute("disabled")}))}));
//# sourceMappingURL=index.5f920658.js.map
