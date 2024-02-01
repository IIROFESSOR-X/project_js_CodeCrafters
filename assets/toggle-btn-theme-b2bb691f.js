import{a as M,i as p}from"./vendor-8cce9181.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const f={mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuBtnClose:document.querySelector("[data-mobile-menu-close]"),mobileMenuBtnOpen:document.querySelector("[data-modal-open]")};f.mobileMenu.classList.contains("is-hidden")&&f.mobileMenuBtnOpen.addEventListener("click",O);function O(){f.mobileMenu.classList.remove("is-hidden"),f.mobileMenuBtnClose.addEventListener("click",N),f.mobileMenuBtnOpen.removeEventListener("click",O)}function N(){f.mobileMenu.classList.add("is-hidden"),f.mobileMenuBtnClose.removeEventListener("click",N),f.mobileMenuBtnOpen.addEventListener("click",O)}const k="/project_js_CodeCrafters/assets/symbol-defs-dfb5c4f7.svg";let B,c,v=1;const d={favoritesList:document.querySelector(".favorites-list"),gymInfo:document.querySelector(".gym-info"),modalBtnFavorites:document.querySelector(".modal-button-favorites")};window.addEventListener("load",H);const S=t=>{if(document.body.clientWidth<=768&&c.length>0&&(t=V()),d.favoritesList){const n=t.reduce((o,{_id:a,name:e,burnedCalories:i,time:r,bodyPart:s,target:g})=>o+`<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${a}" aria-label="remove an exercise from your favorites">
        <svg class="card-btn-delete-svg" width="16" height="16" data-action="delete" data-id="${a}">
          <use xlink:href="${k}#icon-trash" data-action="delete" data-id="${a}"></use>
        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${a}">
        Start
        <svg class="card-arrow-svg" width="14" height="14" data-action="start" data-id="${a}">
          <use
            xlink:href="${k}#icon-arrow" data-action="start"
            data-id="${a}"
          ></use>
        </svg>
      </button>
    </div>
    <div class="card-runing-men-wrapper">
      <svg class="card-runing-men-svg" width="24" height="24">
        <use xlink:href="${k}#icon-running-men"></use>
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
      <span class="card-burned-calories-span">${g}</span>
    </p>
  </div>
</li>`,"");d.favoritesList.innerHTML=n}};function y(){B=localStorage.getItem("favorites");try{c=JSON.parse(B),c||(c=[])}catch(t){console.log(t),c=[]}}function $(t){if(t.target.dataset.action!=="delete")return;y();const n=t.target.dataset.id,o=c.filter(({_id:a})=>a!==n);localStorage.setItem("favorites",JSON.stringify(o)),y(),c.length||d.gymInfo.classList.remove("is-hidden"),x.innerHTML="",S(c)}function T(t){if(t.target.dataset.action!=="start")return;const n=t.target.dataset.id;n&&I(n)}const x=document.querySelector(".container-for-pagination");function H(){y(),c.length&&d.gymInfo?(d.gymInfo.classList.add("is-hidden"),S(c),x.addEventListener("click",W),d.favoritesList.addEventListener("click",$),d.favoritesList.addEventListener("click",T)):d.gymInfo&&(d.gymInfo.classList.remove("is-hidden"),d.favoritesList.removeEventListener("click",$),d.favoritesList.removeEventListener("click",T))}const J=document.querySelector(".exercises-section-fv");function W(t){if(t.target.dataset.number){let n=t.target.dataset.number;if(n===v)return;v=n}t.target.dataset&&(t.target.dataset.id=="left"?v=1:v=Math.ceil(c.length/8)),y(),S(c)}const V=()=>{let t=c.length;if(t<1)return;let n=v*8;return x.innerHTML=Q(v,Math.ceil(t/8)),J.scrollIntoView({behavior:"smooth",block:"start"}),c.slice(n-8,n)};function Q(t,n){t=Number.parseInt(t);let o=`<li data-id="left"><svg  class="page-choice-svg"  width="18"  height="18"    data-id="left"  
                      xmlns="http://www.w3.org/2000/svg"  id="Outline"  viewBox="0 0 24 24"  width="512"  height="512">  <path    d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"
                      />
                    </svg> </li>`,a=`<li data-id="right"><svg class="page-choice-svg" data-id="right"   xmlns="http://www.w3.org/2000/svg" id="Outline"
                        viewBox="0 0 24 24" width="512" height="512"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" /></svg></li> `,e=0,i="",r=0;if(n<6)return e=1,r=n+1,s(e,r);if(n>5&&t>0&&t<4)return r=5+1,i=s(e+1,r)+a,i;if(t>3&&t+2<n)return e=t-2,r=t+3,o+s(e,r)+a;if(n<=t+2)return n==t+2?e=t-2:n-t==1?e=t-3:e=t-4,o+s(e,n+1);function s(g,l){let m="";for(let u=g;u<l;u++)t==u&&(m+=`<li>
          <button class="exercises-pages-button select-pages-ative" 
           data-number="${u}" >${u}</button>
        </li>`),t!=u&&(m+=`<li>
          <button class="exercises-pages-button" 
           data-number="${u}" >${u}</button>
        </li>`);return m}}let C="",A,E;function _(t){C=t,document.querySelector(".modal-button-rating").addEventListener("click",n=>{L(),K()})}function K(){const t=`
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
  `,n=document.querySelector(".container-for-modal");n.innerHTML=t;const o=document.querySelector(".rating-modal-backdrop");document.querySelectorAll(".rating-modal-backdrop .rating-modal-close-button").forEach(e=>{e.addEventListener("click",()=>{b()})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&b()}),o.addEventListener("click",e=>{e.target===o&&b()}),U(),Z()}function b(){const t=document.querySelector(".rating-modal-backdrop");t&&(t.remove(),I(C))}function U(){const t=document.querySelector(".rating-container.rating-set.rating-modal-container");t&&(n(t),o(),a(t));function n(e){A=e.querySelector(".rating-active.rating-modal-active"),E=e.querySelector(".rating-value.rating-modal-value")}function o(e=E.innerHTML){const i=e/.05;A.style.width=`${i}%`}function a(e){const i=e.querySelectorAll(".rating-item.rating-modal-item");for(let r=0;r<i.length;r++){const s=i[r];s.addEventListener("mouseenter",function(g){n(e),o(s.value)}),s.addEventListener("mouseleave",function(g){o()}),s.addEventListener("click",function(g){n(e);const l=(g.clientX-s.getBoundingClientRect().left)/s.clientWidth,m=Math.min(5,r+l);E.innerHTML=m.toFixed(1),o(m)})}e.addEventListener("mouseleave",function(r){e.classList.remove("interacting")})}}function Z(){document.querySelector(".button-modal-rating-send").addEventListener("click",async n=>{n.preventDefault();const o=document.getElementById("email-modal"),a=document.getElementById("user-comment"),e=parseFloat(document.querySelector(".rating-value").innerText);if(o.checkValidity()&&a.checkValidity()&&e>=0){let i={rate:e,email:o.value,review:a.value};try{await M.patch(`https://energyflow.b.goit.study/api/exercises/${C}/rating/`,i),b()}catch(r){console.error(r.response.data),p.error({title:"Error",message:"Failed to submit the rating. Please try again later."})}}else p.warning({title:"Warning",message:"Please fill in all the required fields."})})}const w=document.querySelector(".container-for-modal"),I=t=>{try{M({method:"get",url:`https://energyflow.b.goit.study/api/exercises/${t}`}).then(o=>{z(o.data),G(o.data.rating),X(o.data)}).catch(o=>{console.log(o)}).finally(()=>{w.removeEventListener("click",I),document.addEventListener("click",R),document.addEventListener("keydown",j)})}catch(n){console.error(n)}};function z(t={}){const n=`
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
        </div>`;w.innerHTML=n,_(t._id)}function G(t){const n=t/5*100,o=`${Math.round(n/10)*10}%`;document.querySelector(".rating .stars-inner").style.width=o}function R(t){(t.target.classList.contains("modal-close-button")||t.target.classList.contains("overlay"))&&L()}function j(t){t.key==="Escape"&&L()}function L(){w.innerHTML="",document.removeEventListener("keydown",j),document.removeEventListener("click",R)}const q=()=>{let t=JSON.parse(localStorage.getItem("favorites"));S(t)};function X(t){const n=localStorage.getItem("favorites")||"[]",o=t;let a;try{a=JSON.parse(n)}catch(l){console.log(l),a=[]}Array.isArray(a)||(a=[]);const e=w.querySelector(".modal-button-favorites"),i=e.querySelector(".btn-text"),r=()=>{const l=a.filter(m=>m._id!==o._id);localStorage.setItem("favorites",JSON.stringify(l)),i.textContent="Add to favorites",p.error({message:"Exercise has been removed from Favourites"}),q(),e.removeEventListener("click",r),e.addEventListener("click",s)},s=()=>{let l=!1;l||(a.find(u=>u._id===o._id)?(localStorage.setItem("favorites",JSON.stringify(a)),i.textContent="Remove from",p.success({title:"Success",message:"Exercise has been added to Favourites"}),q(),e.removeEventListener("click",s),e.addEventListener("click",r)):(a.push(o),localStorage.setItem("favorites",JSON.stringify(a)),i.textContent="Remove from",p.success({title:"Success",message:"Exercise has been added to Favourites"}),q(),l=!0,e.removeEventListener("click",s),e.addEventListener("click",r)))};e.removeEventListener("click",r),e.removeEventListener("click",s),a.find(l=>l._id===o._id)?(e.addEventListener("click",r),i.textContent="Remove from"):(e.addEventListener("click",s),i.textContent="Add to favorites")}const Y=document.querySelector(".quote-text"),P=document.querySelector(".quote-author"),tt=async()=>{try{return(await M.get("https://energyflow.b.goit.study/api/quote")).data}catch(t){console.log(t.message)}},et=(t,n)=>{const o={quote:t,author:n,date:new Date().toDateString()};localStorage.setItem("quote-data",JSON.stringify(o))},nt=()=>{const t=localStorage.getItem("quote-data");if(t){const{date:n,quote:o,author:a}=JSON.parse(t);if(n===new Date().toDateString()){F(o,a);return}}at()},F=(t,n)=>{Y.textContent=t,P.textContent=n},at=async()=>{const t=await tt();F(t.quote,t.author),et(t.quote,t.author)};nt();const D=document.getElementById("toggle-btn-theme"),h=document.body;function ot(){D.checked?(h.classList.remove("light-theme"),h.classList.add("dark-theme")):(h.classList.remove("dark-theme"),h.classList.add("light-theme"))}function it(){window.innerWidth<=767&&(document.querySelectorAll(".header-social-list").forEach(a=>{a.classList.remove("visible")}),document.querySelector(".toggle-btn-theme").classList.add("visible"),document.querySelectorAll(".header-social-item").forEach(a=>{a.classList.contains("toggle-container")||a.classList.add("hidden")}))}window.addEventListener("DOMContentLoaded",it);D.addEventListener("change",ot);export{k as e,I as o};
//# sourceMappingURL=toggle-btn-theme-b2bb691f.js.map