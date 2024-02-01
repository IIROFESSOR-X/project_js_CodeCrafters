import{a as M,i as f}from"./vendor-8cce9181.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const v={mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuBtnClose:document.querySelector("[data-mobile-menu-close]"),mobileMenuBtnOpen:document.querySelector("[data-modal-open]")};v.mobileMenu.classList.contains("is-hidden")&&v.mobileMenuBtnOpen.addEventListener("click",O);function O(){v.mobileMenu.classList.remove("is-hidden"),v.mobileMenuBtnClose.addEventListener("click",T),v.mobileMenuBtnOpen.removeEventListener("click",O)}function T(){v.mobileMenu.classList.add("is-hidden"),v.mobileMenuBtnClose.removeEventListener("click",T),v.mobileMenuBtnOpen.addEventListener("click",O)}const k="/project_js_CodeCrafters/assets/symbol-defs-dfb5c4f7.svg";let I,c,b=1;const d={favoritesList:document.querySelector(".favorites-list"),gymInfo:document.querySelector(".gym-info"),modalBtnFavorites:document.querySelector(".modal-button-favorites")};window.addEventListener("load",J);const S=e=>{if(document.body.clientWidth<=768&&c.length>0&&(e=V()),d.favoritesList){const n=e.reduce((a,{_id:o,name:t,burnedCalories:i,time:r,bodyPart:s,target:g})=>a+`<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${o}" aria-label="remove an exercise from your favorites">
        <svg class="card-btn-delete-svg" width="16" height="16" data-action="delete" data-id="${o}">
          <use xlink:href="${k}#icon-trash" data-action="delete" data-id="${o}"></use>
        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${o}">
        Start
        <svg class="card-arrow-svg" width="14" height="14" data-action="start" data-id="${o}">
          <use
            xlink:href="${k}#icon-arrow" data-action="start"
            data-id="${o}"
          ></use>
        </svg>
      </button>
    </div>
    <div class="card-runing-men-wrapper">
      <svg class="card-runing-men-svg" width="24" height="24">
        <use xlink:href="${k}#icon-running-men"></use>
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
      <span class="card-burned-calories-span">${g}</span>
    </p>
  </div>
</li>`,"");d.favoritesList.innerHTML=n}};function y(){I=localStorage.getItem("favorites");try{c=JSON.parse(I),c||(c=[])}catch(e){console.log(e),c=[]}}function B(e){if(e.target.dataset.action!=="delete")return;y();const n=e.target.dataset.id,a=c.filter(({_id:o})=>o!==n);localStorage.setItem("favorites",JSON.stringify(a)),y(),c.length||d.gymInfo.classList.remove("is-hidden"),S(c)}function $(e){if(e.target.dataset.action!=="start")return;const n=e.target.dataset.id;n&&C(n)}const N=document.querySelector(".container-for-pagination");function J(){y(),c.length&&d.gymInfo?(d.gymInfo.classList.add("is-hidden"),S(c),N.addEventListener("click",W),d.favoritesList.addEventListener("click",B),d.favoritesList.addEventListener("click",$)):d.gymInfo&&(d.gymInfo.classList.remove("is-hidden"),d.favoritesList.removeEventListener("click",B),d.favoritesList.removeEventListener("click",$))}const H=document.querySelector(".exercises-section-fv");function W(e){let n=e.target.dataset.number;n!==b&&(b=n,y(),S(c))}const V=()=>{let e=c.length,n=b*8;return N.innerHTML=Q(b,Math.ceil(e/8)),H.scrollIntoView({behavior:"smooth",block:"start"}),c.slice(n-8,n)};function Q(e,n){e=Number.parseInt(e);let a=`<svg  class="page-choice-svg"  width="18"  height="18"    data-id="left"  
                      xmlns="http://www.w3.org/2000/svg"  id="Outline"  viewBox="0 0 24 24"  width="512"  height="512">  <path    d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"
                      />
                    </svg> `,o=`<svg class="page-choice-svg" data-id="right"   xmlns="http://www.w3.org/2000/svg" id="Outline"
                        viewBox="0 0 24 24" width="512" height="512"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" /></svg> `,t=0,i="",r=0;if(n<6)return t=1,r=n+1,s(t,r);if(n>5&&e>0&&e<4)return r=5+1,i=s(t+1,r)+o,i;if(e>3&&e+2<n)return t=e-2,r=e+3,a+s(t,r)+o;if(n<=e+2)return n==e+2?t=e-2:n-e==1?t=e-3:t=e-4,a+s(t,n+1);function s(g,l){let m="";for(let u=g;u<l;u++)e==u&&(m+=`<li>
          <button class="exercises-pages-button select-pages-ative" 
           data-number="${u}" >${u}</button>
        </li>`),e!=u&&(m+=`<li>
          <button class="exercises-pages-button" 
           data-number="${u}" >${u}</button>
        </li>`);return m}}let x="",A,E;function _(e){x=e,document.querySelector(".modal-button-rating").addEventListener("click",n=>{L(),K()})}function K(){const e=`
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
  `,n=document.querySelector(".container-for-modal");n.innerHTML=e;const a=document.querySelector(".rating-modal-backdrop");document.querySelectorAll(".rating-modal-backdrop .rating-modal-close-button").forEach(t=>{t.addEventListener("click",()=>{h()})}),document.addEventListener("keydown",t=>{t.key==="Escape"&&h()}),a.addEventListener("click",t=>{t.target===a&&h()}),U(),Z()}function h(){const e=document.querySelector(".rating-modal-backdrop");e&&(e.remove(),C(x))}function U(){const e=document.querySelector(".rating-container.rating-set.rating-modal-container");e&&(n(e),a(),o(e));function n(t){A=t.querySelector(".rating-active.rating-modal-active"),E=t.querySelector(".rating-value.rating-modal-value")}function a(t=E.innerHTML){const i=t/.05;A.style.width=`${i}%`}function o(t){const i=t.querySelectorAll(".rating-item.rating-modal-item");for(let r=0;r<i.length;r++){const s=i[r];s.addEventListener("mouseenter",function(g){n(t),a(s.value)}),s.addEventListener("mouseleave",function(g){a()}),s.addEventListener("click",function(g){n(t);const l=(g.clientX-s.getBoundingClientRect().left)/s.clientWidth,m=Math.min(5,r+l);E.innerHTML=m.toFixed(1),a(m)})}t.addEventListener("mouseleave",function(r){t.classList.remove("interacting")})}}function Z(){document.querySelector(".button-modal-rating-send").addEventListener("click",async n=>{n.preventDefault();const a=document.getElementById("email-modal"),o=document.getElementById("user-comment"),t=parseFloat(document.querySelector(".rating-value").innerText);if(a.checkValidity()&&o.checkValidity()&&t>=0){let i={rate:t,email:a.value,review:o.value};try{await M.patch(`https://energyflow.b.goit.study/api/exercises/${x}/rating/`,i),h()}catch(r){console.error(r.response.data),f.error({title:"Error",message:"Failed to submit the rating. Please try again later."})}}else f.warning({title:"Warning",message:"Please fill in all the required fields."})})}const w=document.querySelector(".container-for-modal"),C=e=>{try{M({method:"get",url:`https://energyflow.b.goit.study/api/exercises/${e}`}).then(a=>{z(a.data),G(a.data.rating),X(a.data)}).catch(a=>{console.log(a)}).finally(()=>{w.removeEventListener("click",C),document.addEventListener("click",R),document.addEventListener("keydown",j)})}catch(n){console.error(n)}};function z(e={}){const n=`
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
        </div>`;w.innerHTML=n,_(e._id)}function G(e){const n=e/5*100,a=`${Math.round(n/10)*10}%`;document.querySelector(".rating .stars-inner").style.width=a}function R(e){(e.target.classList.contains("modal-close-button")||e.target.classList.contains("overlay"))&&L()}function j(e){e.key==="Escape"&&L()}function L(){w.innerHTML="",document.removeEventListener("keydown",j),document.removeEventListener("click",R)}const q=()=>{let e=JSON.parse(localStorage.getItem("favorites"));S(e)};function X(e){const n=localStorage.getItem("favorites")||"[]",a=e;let o;try{o=JSON.parse(n)}catch(l){console.log(l),o=[]}Array.isArray(o)||(o=[]);const t=w.querySelector(".modal-button-favorites"),i=t.querySelector(".btn-text"),r=()=>{const l=o.filter(m=>m._id!==a._id);localStorage.setItem("favorites",JSON.stringify(l)),i.textContent="Add to favorites",f.error({message:"Exercise has been removed from Favourites"}),q(),t.removeEventListener("click",r),t.addEventListener("click",s)},s=()=>{let l=!1;l||(o.find(u=>u._id===a._id)?(localStorage.setItem("favorites",JSON.stringify(o)),i.textContent="Remove from",f.success({title:"Success",message:"Exercise has been added to Favourites"}),q(),t.removeEventListener("click",s),t.addEventListener("click",r)):(o.push(a),localStorage.setItem("favorites",JSON.stringify(o)),i.textContent="Remove from",f.success({title:"Success",message:"Exercise has been added to Favourites"}),q(),l=!0,t.removeEventListener("click",s),t.addEventListener("click",r)))};t.removeEventListener("click",r),t.removeEventListener("click",s),o.find(l=>l._id===a._id)?(t.addEventListener("click",r),i.textContent="Remove from"):(t.addEventListener("click",s),i.textContent="Add to favorites")}const Y=document.querySelector(".quote-text"),P=document.querySelector(".quote-author"),ee=async()=>{try{return(await M.get("https://energyflow.b.goit.study/api/quote")).data}catch(e){console.log(e.message)}},te=(e,n)=>{const a={quote:e,author:n,date:new Date().toDateString()};localStorage.setItem("quote-data",JSON.stringify(a))},ne=()=>{const e=localStorage.getItem("quote-data");if(e){const{date:n,quote:a,author:o}=JSON.parse(e);if(n===new Date().toDateString()){F(a,o);return}}oe()},F=(e,n)=>{Y.textContent=e,P.textContent=n},oe=async()=>{const e=await ee();F(e.quote,e.author),te(e.quote,e.author)};ne();const D=document.getElementById("toggle-btn-theme"),p=document.body;function ae(){D.checked?(p.classList.remove("light-theme"),p.classList.add("dark-theme")):(p.classList.remove("dark-theme"),p.classList.add("light-theme"))}function ie(){window.innerWidth<=767&&(document.querySelectorAll(".header-social-list").forEach(o=>{o.classList.remove("visible")}),document.querySelector(".toggle-btn-theme").classList.add("visible"),document.querySelectorAll(".header-social-item").forEach(o=>{o.classList.contains("toggle-container")||o.classList.add("hidden")}))}window.addEventListener("DOMContentLoaded",ie);D.addEventListener("change",ae);export{k as e,C as o};
//# sourceMappingURL=toggle-btn-theme-d396d544.js.map
