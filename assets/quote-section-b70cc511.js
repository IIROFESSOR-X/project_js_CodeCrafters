import{a as S,i as M}from"./vendor-8cce9181.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const u={mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuBtnClose:document.querySelector("[data-mobile-menu-close]"),mobileMenuBtnOpen:document.querySelector("[data-modal-open]")};u.mobileMenu.classList.contains("is-hidden")&&u.mobileMenuBtnOpen.addEventListener("click",k);function k(){u.mobileMenu.classList.remove("is-hidden"),u.mobileMenuBtnClose.addEventListener("click",x),u.mobileMenuBtnOpen.removeEventListener("click",k)}function x(){u.mobileMenu.classList.add("is-hidden"),u.mobileMenuBtnClose.removeEventListener("click",x),u.mobileMenuBtnOpen.addEventListener("click",k)}const b="/project_js_CodeCrafters/assets/symbol-defs-dfb5c4f7.svg";let O,d;const c={favoritesList:document.querySelector(".favorites-list"),gymInfo:document.querySelector(".gym-info"),modalBtnFavorites:document.querySelector(".modal-button-favorites")};window.addEventListener("load",A);const w=t=>{if(c.favoritesList){const n=t.reduce((a,{_id:o,name:e,burnedCalories:i,time:r,bodyPart:s,target:m})=>a+`<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${o}" aria-label="remove an exercise from your favorites">
        <svg class="card-btn-delete-svg" width="16" height="16" data-action="delete" data-id="${o}">
          <use xlink:href="${b}#icon-trash" data-action="delete" data-id="${o}"></use>
        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${o}">
        Start
        <svg class="card-arrow-svg" width="14" height="14" data-action="start" data-id="${o}">
          <use
            xlink:href="${b}#icon-arrow" data-action="start"
            data-id="${o}"
          ></use>
        </svg>
      </button>
    </div>
    <div class="card-runing-men-wrapper">
      <svg class="card-runing-men-svg" width="24" height="24">
        <use xlink:href="${b}#icon-running-men"></use>
      </svg>
      <span class="card-name-traning">${e} </span>
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
</li>`,"");c.favoritesList.innerHTML=n}};function L(){O=localStorage.getItem("favorites");try{d=JSON.parse(O),d||(d=[])}catch(t){console.log(t),d=[]}}function B(t){if(t.target.dataset.action!=="delete")return;L();const n=t.target.dataset.id,a=d.filter(({_id:o})=>o!==n);localStorage.setItem("favorites",JSON.stringify(a)),L(),d.length||c.gymInfo.classList.remove("is-hidden"),w(d)}function C(t){if(t.target.dataset.action!=="start")return;const n=t.target.dataset.id;n&&q(n)}function A(){L(),d.length&&c.gymInfo?(c.gymInfo.classList.add("is-hidden"),w(d),c.favoritesList.addEventListener("click",B),c.favoritesList.addEventListener("click",C)):c.gymInfo&&(c.gymInfo.classList.remove("is-hidden"),c.favoritesList.removeEventListener("click",B),c.favoritesList.removeEventListener("click",C))}let E="",I,y;function N(t){E=t,document.querySelector(".modal-button-rating").addEventListener("click",n=>{f(),P()})}function P(){const t=`
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
  `,n=document.querySelector(".container-for-modal");n.innerHTML=t;const a=document.querySelector(".rating-modal-backdrop");document.querySelectorAll(".rating-modal-backdrop .rating-modal-close-button").forEach(e=>{e.addEventListener("click",()=>{v()})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&v()}),a.addEventListener("click",e=>{e.target===a&&v()}),D(),F()}function v(){const t=document.querySelector(".rating-modal-backdrop");t&&(t.remove(),q(E))}function D(){const t=document.querySelector(".rating-container.rating-set.rating-modal-container");t&&(n(t),a(),o(t));function n(e){I=e.querySelector(".rating-active.rating-modal-active"),y=e.querySelector(".rating-value.rating-modal-value")}function a(e=y.innerHTML){const i=e/.05;I.style.width=`${i}%`}function o(e){const i=e.querySelectorAll(".rating-item.rating-modal-item");for(let r=0;r<i.length;r++){const s=i[r];s.addEventListener("mouseenter",function(m){n(e),a(s.value)}),s.addEventListener("mouseleave",function(m){a()}),s.addEventListener("click",function(m){n(e);const l=(m.clientX-s.getBoundingClientRect().left)/s.clientWidth,g=Math.min(5,r+l);y.innerHTML=g.toFixed(1),a(g)})}e.addEventListener("mouseleave",function(r){e.classList.remove("interacting")})}}function F(){document.querySelector(".button-modal-rating-send").addEventListener("click",async n=>{n.preventDefault();const a=document.getElementById("email-modal"),o=document.getElementById("user-comment"),e=parseFloat(document.querySelector(".rating-value").innerText);if(a.checkValidity()&&o.checkValidity()&&e>=0){let i={rate:e,email:a.value,review:o.value};try{await S.patch(`https://energyflow.b.goit.study/api/exercises/${E}/rating/`,i),v()}catch(r){console.error(r.response.data),M.error({title:"Error",message:"Failed to submit the rating. Please try again later."})}}else M.warning({title:"Warning",message:"Please fill in all the required fields."})})}const p=document.querySelector(".container-for-modal"),q=t=>{try{S({method:"get",url:`https://energyflow.b.goit.study/api/exercises/${t}`}).then(a=>{J(a.data),H(a.data.rating),Q(a.data)}).catch(a=>{console.log(a)}).finally(()=>{p.removeEventListener("click",q),document.addEventListener("click",$),document.addEventListener("keydown",R)})}catch(n){console.error(n)}};function J(t={}){const n=`
        <div class="overlay">
            <div class="modal-window">
                <span class="modal-close-button">x</span>
                <div class="modal-photo">
                    <!-- Photo -->
                    <img src="${t.gifUrl}" alt="${t.name}">
                </div>
                <!-- Info -->
                <div class="modal-info">
                    <h1 class="modal-title">${t.name}</h1>
                    <div class="rating">
                        <!-- Rating -->
                        <p class="rating-text">${t.rating}</p>
                        <div class="stars-outer">
                            <div class="stars-inner"></div>
                        </div>
                    </div>
                    <div class="modal-line"></div>
                    <div class="section-info">
                        <p class="item-info">Target<br><b>${t.target}</b></p>
                        <p class="item-info">Body Part<br><b>${t.bodyPart}</b></p>
                        <p class="item-info">Equipment<br><b>${t.equipment}</b></p>
                        <p class="item-info">Popular<br><b>${t.popularity}</b></p>
                        <p class="item-info">Burned calories<br><b>${t.burnedCalories}/${t.time} min</b></p>
                    </div>
                    
                    <div class="modal-line"></div>
                    <p class="modal-text">${t.description}</p>
                    <div class="modal-buttons">
                        <button class="modal-button-favorites"><span class="btn-text">Add to favorites</span><span class="heart">&#9825;</span></button>
                        <button class="modal-button-rating" id="modal2">Give a rating</button>
                    </div>
                </div>
            </div>
        </div>`;p.innerHTML=n,N(t._id)}function H(t){const n=t/5*100,a=`${Math.round(n/10)*10}%`;document.querySelector(".rating .stars-inner").style.width=a}function $(t){(t.target.classList.contains("modal-close-button")||t.target.classList.contains("overlay"))&&f()}function R(t){t.key==="Escape"&&f()}function f(){p.innerHTML="",document.removeEventListener("keydown",R),document.removeEventListener("click",$)}const h=()=>{let t=JSON.parse(localStorage.getItem("favorites"));w(t)};function Q(t){const n=localStorage.getItem("favorites")||"[]",a=t;let o;try{o=JSON.parse(n)}catch(l){console.log(l),o=[]}Array.isArray(o)||(o=[]);const e=p.querySelector(".modal-button-favorites"),i=e.querySelector(".btn-text"),r=()=>{const l=o.filter(g=>g._id!==a._id);localStorage.setItem("favorites",JSON.stringify(l)),i.textContent="Add to favorites",h(),e.removeEventListener("click",r),e.addEventListener("click",s)},s=()=>{let l=!1;l||(o.find(j=>j._id===a._id)?(localStorage.setItem("favorites",JSON.stringify(o)),i.textContent="Remove from",h(),e.removeEventListener("click",s),e.addEventListener("click",r)):(o.push(a),localStorage.setItem("favorites",JSON.stringify(o)),i.textContent="Remove from",h(),l=!0,e.removeEventListener("click",s),e.addEventListener("click",r)))};e.removeEventListener("click",r),e.removeEventListener("click",s),o.find(l=>l._id===a._id)?(e.addEventListener("click",r),i.textContent="Remove from"):(e.addEventListener("click",s),i.textContent="Add to favorites")}const V=document.querySelector(".quote-text"),W=document.querySelector(".quote-author"),_=async()=>{try{return(await S.get("https://energyflow.b.goit.study/api/quote")).data}catch(t){console.log(t.message)}},K=(t,n)=>{const a={quote:t,author:n,date:new Date().toDateString()};localStorage.setItem("quote-data",JSON.stringify(a))},U=()=>{const t=localStorage.getItem("quote-data");if(t){const{date:n,quote:a,author:o}=JSON.parse(t);if(n===new Date().toDateString()){T(a,o);return}}z()},T=(t,n)=>{V.textContent=t,W.textContent=n},z=async()=>{const t=await _();T(t.quote,t.author),K(t.quote,t.author)};U();export{b as e,q as o};
//# sourceMappingURL=quote-section-b70cc511.js.map
