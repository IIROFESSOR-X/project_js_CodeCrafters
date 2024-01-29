import{o as T}from"./assets/quote-section-c4ff3607.js";import{a as H}from"./assets/vendor-0cb09735.js";const w=document.querySelector(".exercises-title-span"),v=document.querySelector(".exercises-list"),b=document.querySelector(".exercises-list-pages");b.addEventListener("click",O);v.addEventListener("click",R);const p=document.querySelector(".exercises-form");p.addEventListener("submit",V);p.addEventListener("input",W);const k=document.querySelector(".exercises-button-list"),y=document.querySelector(".form-reset-text-button");y.addEventListener("click",t=>{p.reset(),y.classList.add("reset-button-close")});let g=1,$=8,f="Muscles",d="",h="",S=0;const F=document.querySelectorAll(".exercises-button");[...F].map((t,e)=>{e===0&&t.classList.add("exercises-button-active"),t.addEventListener("click",E)});async function B(t,e,r,n,s,c){let a={};s&&e=="Body parts"&&(e="Body part"),s?a[e.toLowerCase().replace(" ","")]=s:a.filter=e,a.page=r,a.limit=n,c&&(a.keyword=c),document.body.clientWidth>=768&&!s&&(a.limit=12),document.body.clientWidth<=768&&s&&(a.limit=8),document.body.clientWidth>=1440&&s&&(a.limit=9);let i=new URLSearchParams(a).toString();try{const o=await H.get(`https://energyflow.b.goit.study/api/${t}?${i}`);if(S=o.data.totalPages,c&&o.data.results.length==0){A();return}return o.data}catch(o){console.log(o)}}function A(){v.innerHTML=`<div class="no-results-wrapper">
  <p class="no-results-message">
    Unfortunately, <span class="no-results-messag-span">no results</span> no
    results were found. You may want to consider other search options to find
    the exercise you are looking for. Our range is wide and you have the
    opportunity to find more options that suit your needs.
  </p>
</div>`,b.innerHTML=""}E();function E(t){if(k.classList.remove("form-is-open"),p.classList.add("form-is-hiden"),d="",w.innerHTML="",g=1,t){const e=t.target;v.innerHTML='<div class="loader"></div>',f=e.dataset.name,document.querySelector(".exercises-button-active").classList.remove("exercises-button-active"),e.classList.add("exercises-button-active")}M(f)}async function M(t){const e=await B("filters",t,g,$).then(r=>r).catch(r=>console.log(r));q(e.results,e.totalPages)}function q(t,e){if(t[0]._id){let n=t.reduce((s,{_id:c,rating:a,name:i,burnedCalories:o,time:u,bodyPart:m,target:l})=>s+=`<li class="exer-card-item">
          <div class="exer-card-background">
            <div class="card-workout-wrapper">
              <p class="exer-workout-text">WORKOUT</p>
              <p class="exer-card-rating">${a}</p>
              <svg class="card-rating-svg"  width="16" height="16" viewBox="0 0 14 13" fill="none">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394
 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601
  8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627
   10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326
    7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989
     5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
</svg>            
              <button class="card-start-button" data-id="${c}">
                Start
                <svg class="card-arrow-svg" data-id="${c}"  width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round"
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
              <span class="card-name-traning">${i}
            </span></div>
            <p class="card-burned-calories-text">Burned calories:
            <span class="card-burned-calories-span">${o} / ${u} min</span>
            </p>
            
            <p class="card-body-part-text">Body part:
               <span class="card-burned-calories-span">${m}</span>
            </p>
            <p class="card-target-text">Target:
              <span class="card-burned-calories-span">${l}</span>
            </p>

          </div>
        </li>`,"");v.classList.add("card-row-gap-js"),v.innerHTML=n,r()}if(!t[0]._id){let n=t.reduce((s,{filter:c,imgUrl:a,name:i})=>(p.dataset.filter=c,s+=`<li class="exercises-item" data-type="${i}" style="background-image: linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),url(${a}); ">
          <p class="exercises-item-text" data-type="${i}">${i}</p>
          <p class="exercises-item-text-second" data-type="${i}">${c}</p>
        </li>`),"");p.dataset.status="",v.classList.remove("card-row-gap-js"),v.innerHTML=n,r(t.filter)}function r(n){p.dataset.status="",b.innerHTML=I(g,e)}}function O(t){const e=t.target.dataset;if(t.target.dataset.type||e.id){if(g==t.target.dataset.number)return;if(g=t.target.dataset.number,e.id&&(g=S,e.id=="left"&&(g=1)),document.querySelector(".exercises-section").scrollIntoView({behavior:"smooth",block:"start"}),d==""){M(t.target.dataset.type);return}x(t.target.dataset.type,t.target.dataset.card,h)}}function I(t,e){t=Number.parseInt(t);let r=`<svg class="page-choice-svg" width="18" height="18" data-card="${d}" data-id="left" data-type="${f}" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"/></svg>

  `,n=`<svg class="page-choice-svg" data-id="right" data-type="${f}" data-card="${d}" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"/></svg>
`,s=0,c="",a=0;if(e<6)return s=1,a=e+1,i(s,a);if(e>5&&t>0&&t<4)return a=5+1,c=i(s+1,a)+n,c;if(t>3&&t+2<e)return s=t-2,a=t+3,r+i(s,a)+n;if(e<=t+2)return e==t+2?s=t-2:e-t==1?s=t-3:s=t-4,r+i(s,e+1);function i(o,u){let m="";for(let l=o;l<u;l++)t==l&&(m+=`<li>
          <button class="exercises-pages-button select-pages-ative" data-card="${d}"
           data-number="${l}" data-type="${f}">${l}</button>
        </li>`),t!=l&&(m+=`<li>
          <button class="exercises-pages-button" data-card="${d}"
           data-number="${l}" data-type="${f}">${l}</button>
        </li>`);return m}}function R(t){if(t.target.dataset.type){v.innerHTML='<div class="loader"></div>';let e=document.querySelector(".exercises-button-active").dataset.name;e==="Body parts"&&(e="Body part"),d=t.target.dataset.type,g=1,p.classList.remove("form-is-hiden"),b.innerHTML="",k.classList.add("form-is-open"),w.innerHTML=`<span class="exer-title-slash">/</span> ${d.slice(0,1).toUpperCase()}${d.slice(1)}`,x(e,d)}t.target.dataset.id&&T(t.target.dataset.id)}async function x(t,e,r=""){try{const n=await B("exercises",t,g,$,e,r);n&&q(n.results,n.totalPages)}catch(n){console.log(n)}}function V(t){if(t.preventDefault(),h=t.target.elements.usertext.value.trim(),h.length!==0){const e=t.target.dataset.filter;t.target.dataset.status="ok",p.reset(),x(e,d,h)}}function W(t){t.target.value.length>2?y.classList.remove("reset-button-close"):y.classList.add("reset-button-close"),console.log(t.target.value)}const j=document.querySelector(".open-rating-modal");j.addEventListener("click",()=>{N(),U()});function N(){const t=document.querySelector(".container-for-modal");t&&t.remove()}function U(){const t=`
    <div class="rating-modal-backdrop">
      <div class="rating-modal-window">
        <button type="button" class="close-button rating-modal-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M19.8334 8.16666L8.16675 19.8333M8.16675 8.16666L19.8334 19.8333" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <p class="paragraph-rating rating-modal-paragraph-rating">Rating</p>
        <div class="rating-container rating-set rating-modal-container">
          <div class="rating-active rating-modal-active"></div>
          <p class="rating-value rating-modal-value">0.0</p>
          <div class="rating_body rating-modal-body">
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
  `;document.body.insertAdjacentHTML("beforeend",t);const e=document.querySelector(".rating-modal-backdrop");document.querySelectorAll(".rating-modal-backdrop .rating-modal-close-button").forEach(n=>{n.addEventListener("click",()=>{L()})}),document.addEventListener("keydown",n=>{n.key==="Escape"&&L()}),e.addEventListener("click",n=>{n.target===e&&L()}),Z()}function L(){const t=document.querySelector(".rating-modal-backdrop");t&&t.remove()}function Z(){let t,e;const r=document.querySelector(".rating-container.rating-set.rating-modal-container");r&&(n(r),s(),c(r));function n(a){t=a.querySelector(".rating-active.rating-modal-active"),e=a.querySelector(".rating-value.rating-modal-value")}function s(a=e.innerHTML){const i=a/.05;t.style.width=`${i}%`}function c(a){const i=a.querySelectorAll(".rating-item.rating-modal-item");for(let o=0;o<i.length;o++){const u=i[o];u.addEventListener("mouseenter",function(m){n(a),s(u.value)}),u.addEventListener("mouseleave",function(m){s()}),u.addEventListener("click",function(m){n(a);const l=(m.clientX-u.getBoundingClientRect().left)/u.clientWidth,C=o+l;e.innerHTML=C.toFixed(1),s(C)})}a.addEventListener("mouseleave",function(o){})}}const _=document.querySelector(".button-modal-rating-send");_.addEventListener("click",()=>{const t=document.getElementById("email-modal"),e=document.getElementById("user-comment"),r=parseFloat(document.querySelector(".rating-value").innerText);if(t.checkValidity()&&e.checkValidity()&&r>0){const n={rate:r,email:t.value,review:e.value};axios.post(`https://energyflow.b.goit.study/api/exercises/${exerciseId}/rate`,n).then(s=>{L()}).catch(s=>{console.error(s)})}else alert("Please fill in all the required fields.")});
//# sourceMappingURL=commonHelpers3.js.map
