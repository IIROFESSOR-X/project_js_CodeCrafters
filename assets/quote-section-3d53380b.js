import{a as q,i as f}from"./vendor-8cce9181.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const v={mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuBtnClose:document.querySelector("[data-mobile-menu-close]"),mobileMenuBtnOpen:document.querySelector("[data-modal-open]")};v.mobileMenu.classList.contains("is-hidden")&&v.mobileMenuBtnOpen.addEventListener("click",M);function M(){v.mobileMenu.classList.remove("is-hidden"),v.mobileMenuBtnClose.addEventListener("click",A),v.mobileMenuBtnOpen.removeEventListener("click",M)}function A(){v.mobileMenu.classList.add("is-hidden"),v.mobileMenuBtnClose.removeEventListener("click",A),v.mobileMenuBtnOpen.addEventListener("click",M)}const w="/project_js_CodeCrafters/assets/symbol-defs-dfb5c4f7.svg";let $,c,b=1;const d={favoritesList:document.querySelector(".favorites-list"),gymInfo:document.querySelector(".gym-info"),modalBtnFavorites:document.querySelector(".modal-button-favorites")};window.addEventListener("load",F);const L=t=>{if(document.body.clientWidth<=768&&c.length>0&&(t=H()),d.favoritesList){const n=t.reduce((a,{_id:o,name:e,burnedCalories:i,time:r,bodyPart:s,target:g})=>a+`<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${o}" aria-label="remove an exercise from your favorites">
        <svg class="card-btn-delete-svg" width="16" height="16" data-action="delete" data-id="${o}">
          <use xlink:href="${w}#icon-trash" data-action="delete" data-id="${o}"></use>
        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${o}">
        Start
        <svg class="card-arrow-svg" width="14" height="14" data-action="start" data-id="${o}">
          <use
            xlink:href="${w}#icon-arrow" data-action="start"
            data-id="${o}"
          ></use>
        </svg>
      </button>
    </div>
    <div class="card-runing-men-wrapper">
      <svg class="card-runing-men-svg" width="24" height="24">
        <use xlink:href="${w}#icon-running-men"></use>
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
</li>`,"");d.favoritesList.innerHTML=n}};function h(){$=localStorage.getItem("favorites");try{c=JSON.parse($),c||(c=[])}catch(t){console.log(t),c=[]}}function B(t){if(t.target.dataset.action!=="delete")return;h();const n=t.target.dataset.id,a=c.filter(({_id:o})=>o!==n);localStorage.setItem("favorites",JSON.stringify(a)),h(),c.length||d.gymInfo.classList.remove("is-hidden"),L(c)}function C(t){if(t.target.dataset.action!=="start")return;const n=t.target.dataset.id;n&&O(n)}const N=document.querySelector(".container-for-pagination");function F(){h(),c.length&&d.gymInfo?(d.gymInfo.classList.add("is-hidden"),L(c),N.addEventListener("click",D),d.favoritesList.addEventListener("click",B),d.favoritesList.addEventListener("click",C)):d.gymInfo&&(d.gymInfo.classList.remove("is-hidden"),d.favoritesList.removeEventListener("click",B),d.favoritesList.removeEventListener("click",C))}const J=document.querySelector(".exercises-section-fv");function D(t){let n=t.target.dataset.number;n!==b&&(b=n,h(),L(c))}const H=()=>{let t=c.length,n=b*8;return N.innerHTML=V(b,Math.ceil(t/8)),J.scrollIntoView({behavior:"smooth",block:"start"}),c.slice(n-8,n)};function V(t,n){t=Number.parseInt(t);let a=`<svg  class="page-choice-svg"  width="18"  height="18"    data-id="left"  
                      xmlns="http://www.w3.org/2000/svg"  id="Outline"  viewBox="0 0 24 24"  width="512"  height="512">  <path    d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"
                      />
                    </svg> `,o=`<svg class="page-choice-svg" data-id="right"   xmlns="http://www.w3.org/2000/svg" id="Outline"
                        viewBox="0 0 24 24" width="512" height="512"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" /></svg> `,e=0,i="",r=0;if(n<6)return e=1,r=n+1,s(e,r);if(n>5&&t>0&&t<4)return r=5+1,i=s(e+1,r)+o,i;if(t>3&&t+2<n)return e=t-2,r=t+3,a+s(e,r)+o;if(n<=t+2)return n==t+2?e=t-2:n-t==1?e=t-3:e=t-4,a+s(e,n+1);function s(g,l){let m="";for(let u=g;u<l;u++)t==u&&(m+=`<li>
          <button class="exercises-pages-button select-pages-ative" 
           data-number="${u}" >${u}</button>
        </li>`),t!=u&&(m+=`<li>
          <button class="exercises-pages-button" 
           data-number="${u}" >${u}</button>
        </li>`);return m}}let x="",I,k;function W(t){x=t,document.querySelector(".modal-button-rating").addEventListener("click",n=>{y(),Q()})}function Q(){const t=`
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
  `,n=document.querySelector(".container-for-modal");n.innerHTML=t;const a=document.querySelector(".rating-modal-backdrop");document.querySelectorAll(".rating-modal-backdrop .rating-modal-close-button").forEach(e=>{e.addEventListener("click",()=>{p()})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&p()}),a.addEventListener("click",e=>{e.target===a&&p()}),_(),K()}function p(){const t=document.querySelector(".rating-modal-backdrop");t&&(t.remove(),O(x))}function _(){const t=document.querySelector(".rating-container.rating-set.rating-modal-container");t&&(n(t),a(),o(t));function n(e){I=e.querySelector(".rating-active.rating-modal-active"),k=e.querySelector(".rating-value.rating-modal-value")}function a(e=k.innerHTML){const i=e/.05;I.style.width=`${i}%`}function o(e){const i=e.querySelectorAll(".rating-item.rating-modal-item");for(let r=0;r<i.length;r++){const s=i[r];s.addEventListener("mouseenter",function(g){n(e),a(s.value)}),s.addEventListener("mouseleave",function(g){a()}),s.addEventListener("click",function(g){n(e);const l=(g.clientX-s.getBoundingClientRect().left)/s.clientWidth,m=Math.min(5,r+l);k.innerHTML=m.toFixed(1),a(m)})}e.addEventListener("mouseleave",function(r){e.classList.remove("interacting")})}}function K(){document.querySelector(".button-modal-rating-send").addEventListener("click",async n=>{n.preventDefault();const a=document.getElementById("email-modal"),o=document.getElementById("user-comment"),e=parseFloat(document.querySelector(".rating-value").innerText);if(a.checkValidity()&&o.checkValidity()&&e>=0){let i={rate:e,email:a.value,review:o.value};try{await q.patch(`https://energyflow.b.goit.study/api/exercises/${x}/rating/`,i),p()}catch(r){console.error(r.response.data),f.error({title:"Error",message:"Failed to submit the rating. Please try again later."})}}else f.warning({title:"Warning",message:"Please fill in all the required fields."})})}const S=document.querySelector(".container-for-modal"),O=t=>{try{q({method:"get",url:`https://energyflow.b.goit.study/api/exercises/${t}`}).then(a=>{U(a.data),Z(a.data.rating),z(a.data)}).catch(a=>{console.log(a)}).finally(()=>{S.removeEventListener("click",O),document.addEventListener("click",T),document.addEventListener("keydown",R)})}catch(n){console.error(n)}};function U(t={}){const n=`
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
        </div>`;S.innerHTML=n,W(t._id)}function Z(t){const n=t/5*100,a=`${Math.round(n/10)*10}%`;document.querySelector(".rating .stars-inner").style.width=a}function T(t){(t.target.classList.contains("modal-close-button")||t.target.classList.contains("overlay"))&&y()}function R(t){t.key==="Escape"&&y()}function y(){S.innerHTML="",document.removeEventListener("keydown",R),document.removeEventListener("click",T)}const E=()=>{let t=JSON.parse(localStorage.getItem("favorites"));L(t)};function z(t){const n=localStorage.getItem("favorites")||"[]",a=t;let o;try{o=JSON.parse(n)}catch(l){console.log(l),o=[]}Array.isArray(o)||(o=[]);const e=S.querySelector(".modal-button-favorites"),i=e.querySelector(".btn-text"),r=()=>{const l=o.filter(m=>m._id!==a._id);localStorage.setItem("favorites",JSON.stringify(l)),i.textContent="Add to favorites",f.error({message:"Exercise has been removed from Favourites"}),E(),e.removeEventListener("click",r),e.addEventListener("click",s)},s=()=>{let l=!1;l||(o.find(u=>u._id===a._id)?(localStorage.setItem("favorites",JSON.stringify(o)),i.textContent="Remove from",f.success({title:"Success",message:"Exercise has been added to Favourites"}),E(),e.removeEventListener("click",s),e.addEventListener("click",r)):(o.push(a),localStorage.setItem("favorites",JSON.stringify(o)),i.textContent="Remove from",f.success({title:"Success",message:"Exercise has been added to Favourites"}),E(),l=!0,e.removeEventListener("click",s),e.addEventListener("click",r)))};e.removeEventListener("click",r),e.removeEventListener("click",s),o.find(l=>l._id===a._id)?(e.addEventListener("click",r),i.textContent="Remove from"):(e.addEventListener("click",s),i.textContent="Add to favorites")}const G=document.querySelector(".quote-text"),X=document.querySelector(".quote-author"),Y=async()=>{try{return(await q.get("https://energyflow.b.goit.study/api/quote")).data}catch(t){console.log(t.message)}},P=(t,n)=>{const a={quote:t,author:n,date:new Date().toDateString()};localStorage.setItem("quote-data",JSON.stringify(a))},tt=()=>{const t=localStorage.getItem("quote-data");if(t){const{date:n,quote:a,author:o}=JSON.parse(t);if(n===new Date().toDateString()){j(a,o);return}}et()},j=(t,n)=>{G.textContent=t,X.textContent=n},et=async()=>{const t=await Y();j(t.quote,t.author),P(t.quote,t.author)};tt();export{w as e,O as o};
//# sourceMappingURL=quote-section-3d53380b.js.map
