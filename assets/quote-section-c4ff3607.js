import{a as v}from"./vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const a={mobileMenu:document.querySelector("[data-mobile-menu]"),mobileMenuBtnClose:document.querySelector("[data-mobile-menu-close]"),mobileMenuBtnOpen:document.querySelector("[data-modal-open]")};a.mobileMenu.classList.contains("is-hidden")&&a.mobileMenuBtnOpen.addEventListener("click",f);function f(){a.mobileMenu.classList.remove("is-hidden"),a.mobileMenuBtnClose.addEventListener("click",p),a.mobileMenuBtnOpen.removeEventListener("click",f)}function p(){a.mobileMenu.classList.add("is-hidden"),a.mobileMenuBtnClose.removeEventListener("click",p),a.mobileMenuBtnOpen.addEventListener("click",f)}const d=document.querySelector(".container-for-modal"),h=t=>{try{v({method:"get",url:`https://energyflow.b.goit.study/api/exercises/${t}`}).then(n=>{L(n.data),O(n.data.rating),S(n.data)}).catch(n=>{console.log(n)}).finally(()=>{d.removeEventListener("click",h),document.addEventListener("click",b),document.addEventListener("keydown",g)})}catch(o){console.error(o)}};function L(t={}){const o=`
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
        </div>`;d.innerHTML=o}function O(t){const o=t/5*100,n=`${Math.round(o/10)*10}%`;document.querySelector(".rating .stars-inner").style.width=n}function b(t){(t.target.classList.contains("modal-close-button")||t.target.classList.contains("overlay"))&&m()}function g(t){t.key==="Escape"&&m()}function m(){d.innerHTML="",document.removeEventListener("keydown",g),document.removeEventListener("click",b)}function S(t){const o=localStorage.getItem("favorites")||"[]",n=t;let i;try{i=JSON.parse(o)}catch(c){console.log(c),i=[]}Array.isArray(i)||(i=[]);const e=d.querySelector(".modal-button-favorites"),s=e.querySelector(".btn-text"),r=()=>{const c=i.filter(u=>u._id!==n._id);localStorage.setItem("favorites",JSON.stringify(c)),s.textContent="Add to favorites",e.removeEventListener("click",r),e.addEventListener("click",l)},l=()=>{i.find(u=>u._id===n._id)||(i.push(n),localStorage.setItem("favorites",JSON.stringify(i)),s.textContent="Remove from",e.removeEventListener("click",l),e.addEventListener("click",r))};e.removeEventListener("click",r),e.removeEventListener("click",l),i.find(c=>c._id===n._id)?(e.addEventListener("click",r),s.textContent="Remove from"):(e.addEventListener("click",l),s.textContent="Add to favorites")}const q=document.querySelector(".quote-text"),M=document.querySelector(".quote-author"),E=async()=>{try{return(await v.get("https://energyflow.b.goit.study/api/quote")).data}catch(t){console.log(t.message)}},k=(t,o)=>{const n={quote:t,author:o,date:new Date().toDateString()};localStorage.setItem("quote-data",JSON.stringify(n))},C=()=>{const t=localStorage.getItem("quote-data");if(t){const{date:o,quote:n,author:i}=JSON.parse(t);if(o===new Date().toDateString()){y(n,i);return}}w()},y=(t,o)=>{q.textContent=t,M.textContent=o},w=async()=>{const t=await E();y(t.quote,t.author),k(t.quote,t.author)};C();export{h as o};
//# sourceMappingURL=quote-section-c4ff3607.js.map
