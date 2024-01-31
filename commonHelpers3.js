import{e as w,o as O}from"./assets/quote-section-3d53380b.js";import{a as q,i as x}from"./assets/vendor-8cce9181.js";const B="/project_js_CodeCrafters/assets/icons-a97267d1.svg";function A(){document.body.insertAdjacentHTML("beforeend",`<button class="scroll-top-btn">
      <svg class="scroll-top-icon" width="15" height="15">

        <use href="${B}#icon-arrow-top"></use>

      </svg>
    </button>
    `);const t=document.querySelector(".scroll-top-btn"),e=document.documentElement.clientHeight;window.addEventListener("scroll",()=>{window.scrollY>e?t.classList.add("show"):window.scrollY<e&&t.classList.remove("show")}),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})}const $=document.querySelector(".exercises-title-span"),l=document.querySelector(".exercises-list"),b=document.querySelector(".exercises-list-pages");b.addEventListener("click",j);l.addEventListener("click",U);const m=document.querySelector(".exercises-form");m.addEventListener("submit",D);m.addEventListener("input",R);const S=document.querySelector(".exercises-button-list"),h=document.querySelector(".form-reset-text-button");h.addEventListener("click",t=>{m.reset(),h.classList.add("reset-button-close")});let p=1,T=8,f="Muscles",c="",v="",E=0;const F=document.querySelectorAll(".exercises-button");[...F].map((t,e)=>{e===0&&t.classList.add("exercises-button-active"),t.addEventListener("click",C)});async function H(t,e,r,i,s,n){let a={};s&&e=="Body parts"&&(e="Body part"),s?a[e.toLowerCase().replace(" ","")]=s:a.filter=e,a.page=r,a.limit=i,n&&(a.keyword=n),document.body.clientWidth>=768&&!s&&(a.limit=12),document.body.clientWidth<=768&&s&&(a.limit=8),document.body.clientWidth>=1440&&s&&(a.limit=9);let o=new URLSearchParams(a).toString();try{const u=await q.get(`https://energyflow.b.goit.study/api/${t}?${o}`);if(E=u.data.totalPages,n&&u.data.results.length==0){I();return}return u.data}catch(u){console.log(u)}}function I(){l.innerHTML=`<div class="no-results-wrapper">
  <p class="no-results-message">
    Unfortunately, <span class="no-results-messag-span">no results</span> no
    results were found. You may want to consider other search options to find
    the exercise you are looking for. Our range is wide and you have the
    opportunity to find more options that suit your needs.
  </p>
</div>`,b.innerHTML=""}C();function C(t){if(S.classList.remove("form-is-open"),m.classList.add("form-is-hiden"),c="",$.innerHTML="",p=1,t){const e=t.target;l.innerHTML='<div class="loder-container" ><div class="loader"></div></div>',f=e.dataset.name,document.querySelector(".exercises-button-active").classList.remove("exercises-button-active"),e.classList.add("exercises-button-active")}M(f)}async function M(t){const e=await H("filters",t,p,T).then(r=>r).catch(r=>console.log(r));k(e.results,e.totalPages)}function k(t,e){if(t[0]._id){let i=t.reduce((s,{_id:n,rating:a,name:o,burnedCalories:u,time:y,bodyPart:g,target:d})=>s+=`<li class="exer-card-item">
          <div class="exer-card-background">
            <div class="card-workout-wrapper">
              <p class="exer-workout-text">WORKOUT</p>
              <p class="exer-card-rating">${a}</p>
              <svg class="card-rating-svg" width="16" height="16">
                       <use href="${w}#icon-star"></use>
                </svg>            
              <button class="card-start-button" data-id="${n}">
                Start
                <svg class="card-arrow-svg" width="16" height="16" data-id="${n}">
                     <use href="${w}#icon-arrow" data-id="${n}"></use>
                </svg>               
               
              </button>
            </div>
            <div class="card-runing-men-wrapper">
            <svg class="card-runing-men-svg" width="24" height="24">
                 <use href="${w}#icon-running-men"></use>
            </svg>            
              <span class="card-name-traning">${o}
            </span></div>
            <p class="card-burned-calories-text">Burned calories:
            <span class="card-burned-calories-span">${u} / ${y} min</span>
            </p>
            
            <p class="card-body-part-text">Body part:
               <span class="card-burned-calories-span">${g}</span>
            </p>
            <p class="card-target-text">Target:
              <span class="card-burned-calories-span">${d}</span>
            </p>

          </div>
        </li>`,"");l.classList.add("card-row-gap-js"),l.innerHTML=i,r()}if(!t[0]._id){let i=t.reduce((s,{filter:n,imgUrl:a,name:o})=>(m.dataset.filter=n,s+=`<li class="exercises-item" data-type="${o}" style="background-image: linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),url(${a}); ">
          <p class="exercises-item-text" data-type="${o}">${o}</p>
          <p class="exercises-item-text-second" data-type="${o}">${n}</p>
        </li>`),"");m.dataset.status="",l.classList.remove("card-row-gap-js"),l.innerHTML=i,r(t.filter)}function r(i){m.dataset.status="",b.innerHTML=N(p,e)}}function j(t){const e=t.target.dataset;if(t.target.dataset.type||e.id){if(p==t.target.dataset.number)return;if(p=t.target.dataset.number,e.id&&(p=E,e.id=="left"&&(p=1)),document.querySelector(".exercises-section").scrollIntoView({behavior:"smooth",block:"start"}),c==""){l.innerHTML='<div class="loder-container" ><div class="loader"></div></div>',M(t.target.dataset.type);return}l.innerHTML='<div class="loder-container-card" ><div class="loader"></div></div>',L(t.target.dataset.type,t.target.dataset.card,v)}}function N(t,e){t=Number.parseInt(t);let r=`<svg  class="page-choice-svg"  width="18"  height="18"  data-card="${c}"  data-id="left"  data-type="${f}"
                      xmlns="http://www.w3.org/2000/svg"  id="Outline"  viewBox="0 0 24 24"  width="512"  height="512">  <path    d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"
                      />
                    </svg> `,i=`<svg class="page-choice-svg" data-id="right" data-type="${f}" data-card="${c}" xmlns="http://www.w3.org/2000/svg" id="Outline"
                        viewBox="0 0 24 24" width="512" height="512"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" /></svg> `,s=0,n="",a=0;if(e<6)return s=1,a=e+1,o(s,a);if(e>5&&t>0&&t<4)return a=5+1,n=o(s+1,a)+i,n;if(t>3&&t+2<e)return s=t-2,a=t+3,r+o(s,a)+i;if(e<=t+2)return e==t+2?s=t-2:e-t==1?s=t-3:s=t-4,r+o(s,e+1);function o(u,y){let g="";for(let d=u;d<y;d++)t==d&&(g+=`<li>
          <button class="exercises-pages-button select-pages-ative" data-card="${c}"
           data-number="${d}" data-type="${f}">${d}</button>
        </li>`),t!=d&&(g+=`<li>
          <button class="exercises-pages-button" data-card="${c}"
           data-number="${d}" data-type="${f}">${d}</button>
        </li>`);return g}}function U(t){if(t.target.dataset.type){l.innerHTML='<div class="loder-container-card" ><div class="loader"></div></div>';let e=document.querySelector(".exercises-button-active").dataset.name;e==="Body parts"&&(e="Body part"),c=t.target.dataset.type,p=1,m.classList.remove("form-is-hiden"),b.innerHTML="",S.classList.add("form-is-open"),$.innerHTML=`<span class="exer-title-slash">/</span> ${c.slice(0,1).toUpperCase()}${c.slice(1)}`,L(e,c)}t.target.dataset.id&&O(t.target.dataset.id)}async function L(t,e,r=""){try{const i=await H("exercises",t,p,T,e,r);i&&k(i.results,i.totalPages)}catch(i){console.log(i)}}function D(t){if(t.preventDefault(),v=t.target.elements.usertext.value.trim(),v.length!==0){const e=t.target.dataset.filter;t.target.dataset.status="ok",m.reset(),L(e,c,v)}}function R(t){t.target.value.length>2?h.classList.remove("reset-button-close"):h.classList.add("reset-button-close")}A();document.querySelector(".footer-form").addEventListener("submit",function(t){t.preventDefault();const r=this.elements.email.value.trim();if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(r)){x.success("Field must be filled in");return}fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r})}).then(s=>{s.status>=200&&s.status<300&&(x.success({position:"topRight",message:"Subscription successful!"}),this.reset())}).catch(s=>{console.error(s),x.error("Sorry! Failed to subscribe."),this.reset()})});
//# sourceMappingURL=commonHelpers3.js.map
