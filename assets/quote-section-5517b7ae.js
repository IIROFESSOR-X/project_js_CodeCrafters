import{a as w,i as v}from"./vendor-8cce9181.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const u={mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuBtnClose:document.querySelector("[data-mobile-menu-close]"),mobileMenuBtnOpen:document.querySelector("[data-modal-open]")};u.mobileMenu.classList.contains("is-hidden")&&u.mobileMenuBtnOpen.addEventListener("click",k);function k(){u.mobileMenu.classList.remove("is-hidden"),u.mobileMenuBtnClose.addEventListener("click",I),u.mobileMenuBtnOpen.removeEventListener("click",k)}function I(){u.mobileMenu.classList.add("is-hidden"),u.mobileMenuBtnClose.removeEventListener("click",I),u.mobileMenuBtnOpen.addEventListener("click",k)}const y="/project_js_CodeCrafters/assets/symbol-defs-dfb5c4f7.svg",A="/project_js_CodeCrafters/assets/icons-8682fa2e.svg";function N(){document.body.insertAdjacentHTML("beforeend",`<button class="scroll-top-btn">
      <svg class="scroll-top-icon" width="15" height="15">

        <use href="${A}#icon-arrow-top"></use>

      </svg>
    </button>
    `);const t=document.querySelector(".scroll-top-btn"),n=document.documentElement.clientHeight;window.addEventListener("scroll",()=>{window.scrollY>n?t.classList.add("show"):window.scrollY<n&&t.classList.remove("show")}),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})}let O,d;const c={favoritesList:document.querySelector(".favorites-list"),gymInfo:document.querySelector(".gym-info"),modalBtnFavorites:document.querySelector(".modal-button-favorites")};window.addEventListener("load",P);const E=t=>{if(c.favoritesList){const n=t.reduce((o,{_id:a,name:e,burnedCalories:i,time:s,bodyPart:r,target:m})=>o+`<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${a}" aria-label="remove an exercise from your favorites">
        <svg class="card-btn-delete-svg" width="16" height="16" data-action="delete" data-id="${a}">
          <use xlink:href="${y}#icon-trash" data-action="delete" data-id="${a}"></use>
        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${a}">
        Start
        <svg class="card-arrow-svg" width="14" height="14" data-action="start" data-id="${a}">
          <use
            xlink:href="${y}#icon-arrow" data-action="start"
            data-id="${a}"
          ></use>
        </svg>
      </button>
    </div>
    <div class="card-runing-men-wrapper">
      <svg class="card-runing-men-svg" width="24" height="24">
        <use xlink:href="${y}#icon-running-men"></use>
      </svg>
      <span class="card-name-traning">${e} </span>
    </div>
    <p class="card-burned-calories-text">
      Burned calories:
      <span class="card-burned-calories-span"
        >${i} / ${s} min</span
      >
    </p>

    <p class="card-body-part-text">
      Body part:
      <span class="card-burned-calories-span">${r}</span>
    </p>
    <p class="card-target-text">
      Target:
      <span class="card-burned-calories-span">${m}</span>
    </p>
  </div>
</li>`,"");c.favoritesList.innerHTML=n}};function S(){O=localStorage.getItem("favorites");try{d=JSON.parse(O),d||(d=[])}catch(t){console.log(t),d=[]}}function x(t){if(t.target.dataset.action!=="delete")return;S();const n=t.target.dataset.id,o=d.filter(({_id:a})=>a!==n);localStorage.setItem("favorites",JSON.stringify(o)),S(),d.length||c.gymInfo.classList.remove("is-hidden"),E(d)}function C(t){if(t.target.dataset.action!=="start")return;const n=t.target.dataset.id;n&&M(n)}function P(){S(),d.length&&c.gymInfo?(c.gymInfo.classList.add("is-hidden"),E(d),c.favoritesList.addEventListener("click",x),c.favoritesList.addEventListener("click",C)):c.gymInfo&&(c.gymInfo.classList.remove("is-hidden"),c.favoritesList.removeEventListener("click",x),c.favoritesList.removeEventListener("click",C))}N();let q="",B,h;function F(t){q=t,document.querySelector(".modal-button-rating").addEventListener("click",n=>{p(),D()})}function D(){const t=`
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
  `,n=document.querySelector(".container-for-modal");n.innerHTML=t;const o=document.querySelector(".rating-modal-backdrop");document.querySelectorAll(".rating-modal-backdrop .rating-modal-close-button").forEach(e=>{e.addEventListener("click",()=>{f()})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&f()}),o.addEventListener("click",e=>{e.target===o&&f()}),H(),J()}function f(){const t=document.querySelector(".rating-modal-backdrop");t&&(t.remove(),M(q))}function H(){const t=document.querySelector(".rating-container.rating-set.rating-modal-container");t&&(n(t),o(),a(t));function n(e){B=e.querySelector(".rating-active.rating-modal-active"),h=e.querySelector(".rating-value.rating-modal-value")}function o(e=h.innerHTML){const i=e/.05;B.style.width=`${i}%`}function a(e){const i=e.querySelectorAll(".rating-item.rating-modal-item");for(let s=0;s<i.length;s++){const r=i[s];r.addEventListener("mouseenter",function(m){n(e),o(r.value)}),r.addEventListener("mouseleave",function(m){o()}),r.addEventListener("click",function(m){n(e);const l=(m.clientX-r.getBoundingClientRect().left)/r.clientWidth,g=Math.min(5,s+l);h.innerHTML=g.toFixed(1),o(g)})}e.addEventListener("mouseleave",function(s){e.classList.remove("interacting")})}}function J(){document.querySelector(".button-modal-rating-send").addEventListener("click",async n=>{n.preventDefault();const o=document.getElementById("email-modal"),a=document.getElementById("user-comment"),e=parseFloat(document.querySelector(".rating-value").innerText);if(o.checkValidity()&&a.checkValidity()&&e>=0){let i={rate:e,email:o.value,review:a.value};try{await w.patch(`https://energyflow.b.goit.study/api/exercises/${q}/rating/`,i),f()}catch(s){console.error(s.response.data),v.error({title:"Error",message:"Failed to submit the rating. Please try again later."})}}else v.warning({title:"Warning",message:"Please fill in all the required fields."})})}const b=document.querySelector(".container-for-modal"),M=t=>{try{w({method:"get",url:`https://energyflow.b.goit.study/api/exercises/${t}`}).then(o=>{_(o.data),Q(o.data.rating),V(o.data)}).catch(o=>{console.log(o)}).finally(()=>{b.removeEventListener("click",M),document.addEventListener("click",$),document.addEventListener("keydown",T)})}catch(n){console.error(n)}};function _(t={}){const n=`
        <div class="overlay">
            <div class="modal-window">
                <span class="modal-close-button">&#x2715;</span>
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
        </div>`;b.innerHTML=n,F(t._id)}function Q(t){const n=t/5*100,o=`${Math.round(n/10)*10}%`;document.querySelector(".rating .stars-inner").style.width=o}function $(t){(t.target.classList.contains("modal-close-button")||t.target.classList.contains("overlay"))&&p()}function T(t){t.key==="Escape"&&p()}function p(){b.innerHTML="",document.removeEventListener("keydown",T),document.removeEventListener("click",$)}const L=()=>{let t=JSON.parse(localStorage.getItem("favorites"));E(t)};function V(t){const n=localStorage.getItem("favorites")||"[]",o=t;let a;try{a=JSON.parse(n)}catch(l){console.log(l),a=[]}Array.isArray(a)||(a=[]);const e=b.querySelector(".modal-button-favorites"),i=e.querySelector(".btn-text"),s=()=>{const l=a.filter(g=>g._id!==o._id);localStorage.setItem("favorites",JSON.stringify(l)),i.textContent="Add to favorites",v.error({message:"Exercise has been removed from Favourites"}),L(),e.removeEventListener("click",s),e.addEventListener("click",r)},r=()=>{let l=!1;l||(a.find(R=>R._id===o._id)?(localStorage.setItem("favorites",JSON.stringify(a)),i.textContent="Remove from",v.success({title:"Success",message:"Exercise has been added to Favourites"}),L(),e.removeEventListener("click",r),e.addEventListener("click",s)):(a.push(o),localStorage.setItem("favorites",JSON.stringify(a)),i.textContent="Remove from",v.success({title:"Success",message:"Exercise has been added to Favourites"}),L(),l=!0,e.removeEventListener("click",r),e.addEventListener("click",s)))};e.removeEventListener("click",s),e.removeEventListener("click",r),a.find(l=>l._id===o._id)?(e.addEventListener("click",s),i.textContent="Remove from"):(e.addEventListener("click",r),i.textContent="Add to favorites")}const W=document.querySelector(".quote-text"),K=document.querySelector(".quote-author"),U=async()=>{try{return(await w.get("https://energyflow.b.goit.study/api/quote")).data}catch(t){console.log(t.message)}},Y=(t,n)=>{const o={quote:t,author:n,date:new Date().toDateString()};localStorage.setItem("quote-data",JSON.stringify(o))},z=()=>{const t=localStorage.getItem("quote-data");if(t){const{date:n,quote:o,author:a}=JSON.parse(t);if(n===new Date().toDateString()){j(o,a);return}}G()},j=(t,n)=>{W.textContent=t,K.textContent=n},G=async()=>{const t=await U();j(t.quote,t.author),Y(t.quote,t.author)};z();export{y as e,M as o,N as s};
//# sourceMappingURL=quote-section-5517b7ae.js.map
