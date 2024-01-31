import{a as k,i as v}from"./vendor-8cce9181.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const u={mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuBtnClose:document.querySelector("[data-mobile-menu-close]"),mobileMenuBtnOpen:document.querySelector("[data-modal-open]")};u.mobileMenu.classList.contains("is-hidden")&&u.mobileMenuBtnOpen.addEventListener("click",E);function E(){u.mobileMenu.classList.remove("is-hidden"),u.mobileMenuBtnClose.addEventListener("click",I),u.mobileMenuBtnOpen.removeEventListener("click",E)}function I(){u.mobileMenu.classList.add("is-hidden"),u.mobileMenuBtnClose.removeEventListener("click",I),u.mobileMenuBtnOpen.addEventListener("click",E)}const y="/project_js_CodeCrafters/assets/symbol-defs-dfb5c4f7.svg";let O,d;const c={favoritesList:document.querySelector(".favorites-list"),gymInfo:document.querySelector(".gym-info"),modalBtnFavorites:document.querySelector(".modal-button-favorites")};window.addEventListener("load",A);const w=e=>{if(c.favoritesList){const n=e.reduce((a,{_id:o,name:t,burnedCalories:i,time:r,bodyPart:s,target:m})=>a+`<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${o}" aria-label="remove an exercise from your favorites">
        <svg class="card-btn-delete-svg" width="16" height="16" data-action="delete" data-id="${o}">
          <use xlink:href="${y}#icon-trash" data-action="delete" data-id="${o}"></use>
        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${o}">
        Start
        <svg class="card-arrow-svg" width="14" height="14" data-action="start" data-id="${o}">
          <use
            xlink:href="${y}#icon-arrow" data-action="start"
            data-id="${o}"
          ></use>
        </svg>
      </button>
    </div>
    <div class="card-runing-men-wrapper">
      <svg class="card-runing-men-svg" width="24" height="24">
        <use xlink:href="${y}#icon-running-men"></use>
      </svg>
      <span class="card-name-traning">${t} </span>
    </div>
    <p class="card-burned-calories-text">
      Burned calories:
      <span class="card-burned-calories-span"
        >${i} / ${r} min</span
      >
    </p>

    <p class="card-body-part-text">
      Body part:
      <span class="card-burned-calories-span">${s}</span>
    </p>
    <p class="card-target-text">
      Target:
      <span class="card-burned-calories-span">${m}</span>
    </p>
  </div>
</li>`,"");c.favoritesList.innerHTML=n}};function S(){O=localStorage.getItem("favorites");try{d=JSON.parse(O),d||(d=[])}catch(e){console.log(e),d=[]}}function x(e){if(e.target.dataset.action!=="delete")return;S();const n=e.target.dataset.id,a=d.filter(({_id:o})=>o!==n);localStorage.setItem("favorites",JSON.stringify(a)),S(),d.length||c.gymInfo.classList.remove("is-hidden"),w(d)}function B(e){if(e.target.dataset.action!=="start")return;const n=e.target.dataset.id;n&&M(n)}function A(){S(),d.length&&c.gymInfo?(c.gymInfo.classList.add("is-hidden"),w(d),c.favoritesList.addEventListener("click",x),c.favoritesList.addEventListener("click",B)):c.gymInfo&&(c.gymInfo.classList.remove("is-hidden"),c.favoritesList.removeEventListener("click",x),c.favoritesList.removeEventListener("click",B))}let q="",C,h;function N(e){q=e,document.querySelector(".modal-button-rating").addEventListener("click",n=>{p(),P()})}function P(){const e=`
    <div class="rating-modal-backdrop">
      <div class="rating-modal-window">
        <button type="button" class="close-button rating-modal-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M19.8334 8.16666L8.16675 19.8333M8.16675 8.16666L19.8334 19.8333" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <p class="paragraph-rating rating-modal-paragraph-rating">Rating</p>
        <div class="rating-container rating-set rating-modal-container">
          <p class="rating-value rating-modal-value">0.0</p>
          <div class="rating_body rating-modal-body">
            <div class="rating-active rating-modal-active"></div>
            <div class="rating_active rating-modal-active"></div>
            <div class="rating-items rating-modal-items">
              <input type="radio" class="rating-item rating-modal-item" name="rating" value="1" />
              <input type="radio" class="rating-item rating-modal-item" name="rating" value="2" />
              <input type="radio" class="rating-item rating-modal-item" name="rating" value="3" />
              <input type="radio" class="rating-item rating-modal-item" name="rating" value="4" />
              <input type="radio" class="rating-item rating-modal-item" name="rating" value="5" />
            </div>
          </div>
        </div>
        <form class="modal-form" name="leave-your-contacts-form">
          <input type="email" id="email-modal" class="input-modal-form input-modal-form-modal" name="email" placeholder="Email" required>
          <textarea name="user-comment" rows="5" cols="5" placeholder="Text input" id="user-comment" class="user-comment user-comment-modal"></textarea>
          <button class="button-modal-rating-send button-modal-rating-send">Send</button>
        </form>
      </div>
    </div>
  `,n=document.querySelector(".container-for-modal");n.innerHTML=e;const a=document.querySelector(".rating-modal-backdrop");document.querySelectorAll(".rating-modal-backdrop .rating-modal-close-button").forEach(t=>{t.addEventListener("click",()=>{f()})}),document.addEventListener("keydown",t=>{t.key==="Escape"&&f()}),a.addEventListener("click",t=>{t.target===a&&f()}),F(),D()}function f(){const e=document.querySelector(".rating-modal-backdrop");e&&(e.remove(),M(q))}function F(){const e=document.querySelector(".rating-container.rating-set.rating-modal-container");e&&(n(e),a(),o(e));function n(t){C=t.querySelector(".rating-active.rating-modal-active"),h=t.querySelector(".rating-value.rating-modal-value")}function a(t=h.innerHTML){const i=t/.05;C.style.width=`${i}%`}function o(t){const i=t.querySelectorAll(".rating-item.rating-modal-item");for(let r=0;r<i.length;r++){const s=i[r];s.addEventListener("mouseenter",function(m){n(t),a(s.value)}),s.addEventListener("mouseleave",function(m){a()}),s.addEventListener("click",function(m){n(t);const l=(m.clientX-s.getBoundingClientRect().left)/s.clientWidth,g=Math.min(5,r+l);h.innerHTML=g.toFixed(1),a(g)})}t.addEventListener("mouseleave",function(r){t.classList.remove("interacting")})}}function D(){document.querySelector(".button-modal-rating-send").addEventListener("click",async n=>{n.preventDefault();const a=document.getElementById("email-modal"),o=document.getElementById("user-comment"),t=parseFloat(document.querySelector(".rating-value").innerText);if(a.checkValidity()&&o.checkValidity()&&t>=0){let i={rate:t,email:a.value,review:o.value};try{await k.patch(`https://energyflow.b.goit.study/api/exercises/${q}/rating/`,i),f()}catch(r){console.error(r.response.data),v.error({title:"Error",message:"Failed to submit the rating. Please try again later."})}}else v.warning({title:"Warning",message:"Please fill in all the required fields."})})}const b=document.querySelector(".container-for-modal"),M=e=>{try{k({method:"get",url:`https://energyflow.b.goit.study/api/exercises/${e}`}).then(a=>{J(a.data),H(a.data.rating),Q(a.data)}).catch(a=>{console.log(a)}).finally(()=>{b.removeEventListener("click",M),document.addEventListener("click",$),document.addEventListener("keydown",R)})}catch(n){console.error(n)}};function J(e={}){const n=`
        <div class="overlay">
            <div class="modal-window">
                <span class="modal-close-button">&#x2715;</span>
                <div class="modal-photo">
                    <!-- Photo -->
                    <img src="${e.gifUrl}" alt="${e.name}">
                </div>
                <!-- Info -->
                <div class="modal-info">
                    <h1 class="modal-title">${e.name}</h1>
                    <div class="rating">
                        <!-- Rating -->
                        <p class="rating-text">${e.rating}</p>
                        <div class="stars-outer">
                            <div class="stars-inner"></div>
                        </div>
                    </div>
                    <div class="modal-line"></div>
                    <div class="section-info">
                        <p class="item-info">Target<br><b>${e.target}</b></p>
                        <p class="item-info">Body Part<br><b>${e.bodyPart}</b></p>
                        <p class="item-info">Equipment<br><b>${e.equipment}</b></p>
                        <p class="item-info">Popular<br><b>${e.popularity}</b></p>
                        <p class="item-info">Burned calories<br><b>${e.burnedCalories}/${e.time} min</b></p>
                    </div>
                    
                    <div class="modal-line"></div>
                    <p class="modal-text">${e.description}</p>
                    <div class="modal-buttons">
                        <button class="modal-button-favorites"><span class="btn-text">Add to favorites</span><span class="heart">&#9825;</span></button>
                        <button class="modal-button-rating" id="modal2">Give a rating</button>
                    </div>
                </div>
            </div>
        </div>`;b.innerHTML=n,N(e._id)}function H(e){const n=e/5*100,a=`${Math.round(n/10)*10}%`;document.querySelector(".rating .stars-inner").style.width=a}function $(e){(e.target.classList.contains("modal-close-button")||e.target.classList.contains("overlay"))&&p()}function R(e){e.key==="Escape"&&p()}function p(){b.innerHTML="",document.removeEventListener("keydown",R),document.removeEventListener("click",$)}const L=()=>{let e=JSON.parse(localStorage.getItem("favorites"));w(e)};function Q(e){const n=localStorage.getItem("favorites")||"[]",a=e;let o;try{o=JSON.parse(n)}catch(l){console.log(l),o=[]}Array.isArray(o)||(o=[]);const t=b.querySelector(".modal-button-favorites"),i=t.querySelector(".btn-text"),r=()=>{const l=o.filter(g=>g._id!==a._id);localStorage.setItem("favorites",JSON.stringify(l)),i.textContent="Add to favorites",v.error({message:"Exercise has been removed from Favourites"}),L(),t.removeEventListener("click",r),t.addEventListener("click",s)},s=()=>{let l=!1;l||(o.find(j=>j._id===a._id)?(localStorage.setItem("favorites",JSON.stringify(o)),i.textContent="Remove from",v.success({title:"Success",message:"Exercise has been added to Favourites"}),L(),t.removeEventListener("click",s),t.addEventListener("click",r)):(o.push(a),localStorage.setItem("favorites",JSON.stringify(o)),i.textContent="Remove from",v.success({title:"Success",message:"Exercise has been added to Favourites"}),L(),l=!0,t.removeEventListener("click",s),t.addEventListener("click",r)))};t.removeEventListener("click",r),t.removeEventListener("click",s),o.find(l=>l._id===a._id)?(t.addEventListener("click",r),i.textContent="Remove from"):(t.addEventListener("click",s),i.textContent="Add to favorites")}const V=document.querySelector(".quote-text"),W=document.querySelector(".quote-author"),_=async()=>{try{return(await k.get("https://energyflow.b.goit.study/api/quote")).data}catch(e){console.log(e.message)}},K=(e,n)=>{const a={quote:e,author:n,date:new Date().toDateString()};localStorage.setItem("quote-data",JSON.stringify(a))},U=()=>{const e=localStorage.getItem("quote-data");if(e){const{date:n,quote:a,author:o}=JSON.parse(e);if(n===new Date().toDateString()){T(a,o);return}}z()},T=(e,n)=>{V.textContent=e,W.textContent=n},z=async()=>{const e=await _();T(e.quote,e.author),K(e.quote,e.author)};U();export{y as e,M as o};
//# sourceMappingURL=quote-section-dd88bdfc.js.map
