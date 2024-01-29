import{a as b,i as h}from"./vendor-8cce9181.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const d={mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuBtnClose:document.querySelector("[data-mobile-menu-close]"),mobileMenuBtnOpen:document.querySelector("[data-modal-open]")};d.mobileMenu.classList.contains("is-hidden")&&d.mobileMenuBtnOpen.addEventListener("click",y);function y(){d.mobileMenu.classList.remove("is-hidden"),d.mobileMenuBtnClose.addEventListener("click",M),d.mobileMenuBtnOpen.removeEventListener("click",y)}function M(){d.mobileMenu.classList.add("is-hidden"),d.mobileMenuBtnClose.removeEventListener("click",M),d.mobileMenuBtnOpen.addEventListener("click",y)}let C,c;const s={favoritesList:document.querySelector(".favorites-list"),gymInfo:document.querySelector(".gym-info")};window.addEventListener("load",$);const m=t=>{if(s.favoritesList){const a=t.reduce((o,{_id:n,name:e,burnedCalories:i,time:r,bodyPart:u,target:L})=>o+`<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${n}" aria-label="remove an exercise from your favorites">
        <svg class="card-btn-delete-svg" width="16" height="16" viewBox="0 0 32 32" data-action="delete" data-id="${n}">
<path data-action="delete" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6" d="M21.333 8v-1.067c0-1.493 0-2.24-0.291-2.811-0.256-0.502-0.664-0.91-1.165-1.165-0.57-0.291-1.317-0.291-2.811-0.291h-2.133c-1.493 0-2.24 0-2.811 0.291-0.502 0.256-0.91 0.664-1.165 1.165-0.291 0.57-0.291 1.317-0.291 2.811v1.067M13.333 15.333v6.667M18.667 15.333v6.667M4 8h24M25.333 8v14.933c0 2.24 0 3.36-0.436 4.216-0.384 0.753-0.995 1.365-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-5.867c-2.24 0-3.36 0-4.216-0.436-0.753-0.384-1.365-0.995-1.748-1.748-0.436-0.856-0.436-1.976-0.436-4.216v-14.933"></path>        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${n}">
         Start
        <svg class="card-arrow-svg" data-action="start" data-id="${n}"  width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path data-action="start" d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round"
    stroke-linejoin="round"/>
    </svg>               
      </button>
    </div>
            <div class="card-runing-men-wrapper">
            <svg class="card-runing-men-svg"  width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#7E847F"/>
               <path d="M18.8234 8.72544C18.6138 8.47504 18.2403 8.44212 17.9899 8.65092L16.349 10.0294L15.5943
                8.15967C15.5675 8.08949 15.5267 8.03057 15.4799 7.97859C15.3257 7.63549 15.058 7.34091 14.6889
                 7.17023C14.5286 7.09745 14.3631 7.05846 14.1977 7.0394C14.1613 7.02034 14.1283 6.99521 14.0868
                  6.98222L11.199 6.17732C11.037 6.13314 10.8741 6.16173 10.7407 6.2397C10.5821 6.29342 10.4461
                   6.40865 10.3811 6.57587L9.29378 9.37178C9.17594 9.67589 9.3267 10.019 9.63168 10.1386C9.93492
                    10.2564 10.2789 10.1048 10.3976 9.79978L11.316 7.43882L12.6312 7.80444C12.5991 7.85643 12.5645
                     7.90495 12.5385 7.9604L10.8524 11.6149C10.8282 11.6686 10.8152 11.7232 10.7979 11.7787L8.7488
                      15.214L5.31955 16.3611C4.9314 16.6514 4.84909 17.1981 5.13587 17.5862C5.42439 17.9752 5.97282
                       18.0575 6.36011 17.7708L9.86907 16.5621C9.97651 16.4841 10.0545 16.3819 10.1134 16.2719C10.1576
                        16.2251 10.2078 16.1878 10.2416 16.1298L11.4633 14.0816L13.6319 15.9296L11.3116 18.5445C10.9919
                         18.9049 11.024 19.4603 11.3862 19.7791C11.7474 20.1005 12.3011 20.0667 12.6225 19.7046L15.5181
                          16.4426C15.6082 16.342 15.6619 16.2259 15.6983 16.1047C15.7199 16.0388 15.7199 15.9704 15.7251
                           15.9019C15.7251 15.8673 15.7381 15.8361 15.7355 15.804C15.7277 15.5649 15.6307 15.3327 15.4349
                            15.1672L13.4395 13.4656C13.5834 13.3287 13.7055 13.1658 13.7939 12.9743L15.0866 10.1749L15.5007
                             11.2779C15.5181 11.3758 15.551 11.472 15.6203 11.5525C15.6827 11.627 15.7624 11.6764 15.8473
                              11.7111C15.856 11.7154 15.8664 11.7163 15.8768 11.7189C15.9305 11.7379 15.9851 11.7561 16.0414
                               11.7587C16.1081 11.7648 16.1757 11.7561 16.2441 11.7371C16.2459 11.7362 16.2467 11.7362 16.2467
                                11.7362C16.2649 11.7319 16.2831 11.7353 16.3013 11.7275C16.3975 11.6912 16.4711 11.6296 16.5344
                                 11.5577L18.8893 9.55892C19.1397 9.34838 19.034 8.97583 18.8234 8.72544Z" fill="#F6F6F6"/>
               <path d="M15.8448 7.30102C16.7564 7.30102 17.4954 6.56206 17.4954 5.65051C17.4954 4.73896 16.7564 4 15.8448
                4C14.9333 4 14.1943 4.73896 14.1943 5.65051C14.1943 6.56206 14.9333 7.30102 15.8448 7.30102Z" fill="#F6F6F6"/>
              </svg>            
              <span class="card-name-traning">${e}
            </span></div>
    <p class="card-burned-calories-text">
      Burned calories:
      <span class="card-burned-calories-span"
        >${i} / ${r} min</span
      >
    </p>

    <p class="card-body-part-text">
      Body part:
      <span class="card-burned-calories-span">${u}</span>
    </p>
    <p class="card-target-text">
      Target:
      <span class="card-burned-calories-span">${L}</span>
    </p>
  </div>
</li>`,"");s.favoritesList.innerHTML=a}};function I(){C=localStorage.getItem("favorites");try{c=JSON.parse(C)}catch(t){console.log(t),c=[]}}function k(t){if(t.target.dataset.action!=="delete")return;const a=t.target.dataset.id,o=c.find(({_id:e})=>e===a),n=c.indexOf(o);c.splice(n,1),localStorage.setItem("favorites",JSON.stringify(c)),c.length||s.gymInfo.classList.remove("is-hidden"),m(c)}function S(t){if(t.target.dataset.action!=="start")return;const a=t.target.dataset.id;a&&E(a)}function $(){I(),c.length&&s.gymInfo?(s.gymInfo.classList.add("is-hidden"),m(c),s.favoritesList.addEventListener("click",k),s.favoritesList.addEventListener("click",S)):s.gymInfo&&(s.gymInfo.classList.remove("is-hidden"),s.favoritesList.removeEventListener("click",k),s.favoritesList.removeEventListener("click",S))}let w="";function N(t){w=t,document.querySelector(".modal-button-rating").addEventListener(click,a=>{v(),j()})}function j(){const t=`
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
  `,a=document.querySelector(".container-for-modal");a.innerHTML=t;const o=document.querySelector(".rating-modal-backdrop");document.querySelectorAll(".rating-modal-backdrop .rating-modal-close-button").forEach(e=>{e.addEventListener("click",()=>{closeSecondModal()})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&closeSecondModal()}),o.addEventListener("click",e=>{e.target===o&&closeSecondModal()}),initRating(),F()}async function F(){document.querySelector(".button-modal-rating-send").addEventListener("click",a=>{a.preventDefault();const o=document.getElementById("email-modal"),n=document.getElementById("user-comment"),e=parseFloat(document.querySelector(".rating-value").innerText);if(o.checkValidity()&&n.checkValidity()&&e>=0){let i={rate:e,email:o.value,review:n.value};try{b.patch(`https:energyflow.b.goit.study/api/exercises/${w}/rating/`,i),closeSecondModal()}catch(r){console.error(r.response.data),h.error({title:"Error",message:"Failed to submit the rating. Please try again later."})}}else h.warning({title:"Warning",message:"Please fill in all the required fields."})})}const f=document.querySelector(".container-for-modal"),E=t=>{try{b({method:"get",url:`https://energyflow.b.goit.study/api/exercises/${t}`}).then(o=>{T(o.data),P(o.data.rating),J(o.data)}).catch(o=>{console.log(o)}).finally(()=>{f.removeEventListener("click",E),document.addEventListener("click",O),document.addEventListener("keydown",q)})}catch(a){console.error(a)}};function T(t={}){const a=`
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
        </div>`;f.innerHTML=a,N(t._id)}function P(t){const a=t/5*100,o=`${Math.round(a/10)*10}%`;document.querySelector(".rating .stars-inner").style.width=o}function O(t){(t.target.classList.contains("modal-close-button")||t.target.classList.contains("overlay"))&&v()}function q(t){t.key==="Escape"&&v()}function v(){f.innerHTML="",document.removeEventListener("keydown",q),document.removeEventListener("click",O)}function J(t){const a=localStorage.getItem("favorites")||"[]",o=t;let n;try{n=JSON.parse(a)}catch(l){console.log(l),n=[]}Array.isArray(n)||(n=[]);const e=f.querySelector(".modal-button-favorites"),i=e.querySelector(".btn-text"),r=()=>{const l=n.filter(g=>g._id!==o._id);localStorage.setItem("favorites",JSON.stringify(l)),i.textContent="Add to favorites";let p=JSON.parse(localStorage.getItem("favorites"));m(p),e.removeEventListener("click",r),e.addEventListener("click",u)},u=()=>{let l=!1;if(!l){const p=n.find(x=>x._id===o._id);let g=JSON.parse(localStorage.getItem("favorites"));p?(localStorage.setItem("favorites",JSON.stringify(n)),i.textContent="Remove from",m(g),e.removeEventListener("click",u),e.addEventListener("click",r)):(n.push(o),localStorage.setItem("favorites",JSON.stringify(n)),i.textContent="Remove from",m(g),l=!0,e.removeEventListener("click",u),e.addEventListener("click",r))}};e.removeEventListener("click",r),e.removeEventListener("click",u),n.find(l=>l._id===o._id)?(e.addEventListener("click",r),i.textContent="Remove from"):(e.addEventListener("click",u),i.textContent="Add to favorites")}const R=document.querySelector(".quote-text"),A=document.querySelector(".quote-author"),D=async()=>{try{return(await b.get("https://energyflow.b.goit.study/api/quote")).data}catch(t){console.log(t.message)}},Q=(t,a)=>{const o={quote:t,author:a,date:new Date().toDateString()};localStorage.setItem("quote-data",JSON.stringify(o))},_=()=>{const t=localStorage.getItem("quote-data");if(t){const{date:a,quote:o,author:n}=JSON.parse(t);if(a===new Date().toDateString()){B(o,n);return}}H()},B=(t,a)=>{R.textContent=t,A.textContent=a},H=async()=>{const t=await D();B(t.quote,t.author),Q(t.quote,t.author)};_();export{E as o};
//# sourceMappingURL=quote-section-41e19878.js.map
