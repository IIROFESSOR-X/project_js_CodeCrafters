import{a as S}from"./vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const l={mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuBtnClose:document.querySelector("[data-mobile-menu-close]"),mobileMenuBtnOpen:document.querySelector("[data-modal-open]")};l.mobileMenu.classList.contains("is-hidden")&&l.mobileMenuBtnOpen.addEventListener("click",b);function b(){l.mobileMenu.classList.remove("is-hidden"),l.mobileMenuBtnClose.addEventListener("click",k),l.mobileMenuBtnOpen.removeEventListener("click",b)}function k(){l.mobileMenu.classList.add("is-hidden"),l.mobileMenuBtnClose.removeEventListener("click",k),l.mobileMenuBtnOpen.addEventListener("click",b)}let C,c;const i={favoritesList:document.querySelector(".favorites-list"),gymInfo:document.querySelector(".gym-info")};window.addEventListener("load",B);const f=t=>{if(i.favoritesList){const o=t.reduce((n,{_id:a,name:e,burnedCalories:s,time:r,bodyPart:u,target:L})=>n+`<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${a}" aria-label="remove an exercise from your favorites">
        <svg class="card-btn-delete-svg" width="16" height="16" viewBox="0 0 32 32" data-action="delete" data-id="${a}">
<path data-action="delete" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6" d="M21.333 8v-1.067c0-1.493 0-2.24-0.291-2.811-0.256-0.502-0.664-0.91-1.165-1.165-0.57-0.291-1.317-0.291-2.811-0.291h-2.133c-1.493 0-2.24 0-2.811 0.291-0.502 0.256-0.91 0.664-1.165 1.165-0.291 0.57-0.291 1.317-0.291 2.811v1.067M13.333 15.333v6.667M18.667 15.333v6.667M4 8h24M25.333 8v14.933c0 2.24 0 3.36-0.436 4.216-0.384 0.753-0.995 1.365-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-5.867c-2.24 0-3.36 0-4.216-0.436-0.753-0.384-1.365-0.995-1.748-1.748-0.436-0.856-0.436-1.976-0.436-4.216v-14.933"></path>        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${a}">
         Start
        <svg class="card-arrow-svg" data-action="start" data-id="${a}"  width="16" height="16" viewBox="0 0 16 16" fill="none">
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
        >${s} / ${r} min</span
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
</li>`,"");i.favoritesList.innerHTML=o}};function x(){C=localStorage.getItem("favorites");try{c=JSON.parse(C)}catch(t){console.log(t),c=[]}}function y(t){if(t.target.dataset.action!=="delete")return;const o=t.target.dataset.id,n=c.find(({_id:e})=>e===o),a=c.indexOf(n);c.splice(a,1),localStorage.setItem("favorites",JSON.stringify(c)),c.length||i.gymInfo.classList.remove("is-hidden"),f(c)}function h(t){if(t.target.dataset.action!=="start")return;const o=t.target.dataset.id;o&&O(o)}function B(){x(),c.length&&i.gymInfo?(i.gymInfo.classList.add("is-hidden"),f(c),i.favoritesList.addEventListener("click",y),i.favoritesList.addEventListener("click",h)):i.gymInfo&&(i.gymInfo.classList.remove("is-hidden"),i.favoritesList.removeEventListener("click",y),i.favoritesList.removeEventListener("click",h))}const v=document.querySelector(".container-for-modal"),O=t=>{try{S({method:"get",url:`https://energyflow.b.goit.study/api/exercises/${t}`}).then(n=>{I(n.data),$(n.data.rating),N(n.data)}).catch(n=>{console.log(n)}).finally(()=>{v.removeEventListener("click",O),document.addEventListener("click",M),document.addEventListener("keydown",w)})}catch(o){console.error(o)}};function I(t={}){const o=`
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
        </div>`;v.innerHTML=o}function $(t){const o=t/5*100,n=`${Math.round(o/10)*10}%`;document.querySelector(".rating .stars-inner").style.width=n}function M(t){(t.target.classList.contains("modal-close-button")||t.target.classList.contains("overlay"))&&p()}function w(t){t.key==="Escape"&&p()}function p(){v.innerHTML="",document.removeEventListener("keydown",w),document.removeEventListener("click",M)}function N(t){const o=localStorage.getItem("favorites")||"[]",n=t;let a;try{a=JSON.parse(o)}catch(d){console.log(d),a=[]}Array.isArray(a)||(a=[]);const e=v.querySelector(".modal-button-favorites"),s=e.querySelector(".btn-text"),r=()=>{const d=a.filter(m=>m._id!==n._id);localStorage.setItem("favorites",JSON.stringify(d)),s.textContent="Add to favorites";let g=JSON.parse(localStorage.getItem("favorites"));f(g),e.removeEventListener("click",r),e.addEventListener("click",u)},u=()=>{let d=!1;if(!d){const g=a.find(q=>q._id===n._id);let m=JSON.parse(localStorage.getItem("favorites"));g?(localStorage.setItem("favorites",JSON.stringify(a)),s.textContent="Remove from",f(m),e.removeEventListener("click",u),e.addEventListener("click",r)):(a.push(n),localStorage.setItem("favorites",JSON.stringify(a)),s.textContent="Remove from",f(m),d=!0,e.removeEventListener("click",u),e.addEventListener("click",r))}};e.removeEventListener("click",r),e.removeEventListener("click",u),a.find(d=>d._id===n._id)?(e.addEventListener("click",r),s.textContent="Remove from"):(e.addEventListener("click",u),s.textContent="Add to favorites")}const j=document.querySelector(".quote-text"),F=document.querySelector(".quote-author"),J=async()=>{try{return(await S.get("https://energyflow.b.goit.study/api/quote")).data}catch(t){console.log(t.message)}},P=(t,o)=>{const n={quote:t,author:o,date:new Date().toDateString()};localStorage.setItem("quote-data",JSON.stringify(n))},A=()=>{const t=localStorage.getItem("quote-data");if(t){const{date:o,quote:n,author:a}=JSON.parse(t);if(o===new Date().toDateString()){E(n,a);return}}D()},E=(t,o)=>{j.textContent=t,F.textContent=o},D=async()=>{const t=await J();E(t.quote,t.author),P(t.quote,t.author)};A();export{O as o};
//# sourceMappingURL=quote-section-8336cda4.js.map
