import{o as u}from"./assets/quote-section-c4ff3607.js";import"./assets/vendor-0cb09735.js";let d,a;const r={favoritesList:document.querySelector(".favorites-list"),gymInfo:document.querySelector(".gym-info")};window.addEventListener("load",h);r.favoritesList.addEventListener("click",m);r.favoritesList.addEventListener("click",p);function p(t){if(t.target.dataset.action!=="start")return;const s=t.target.dataset.id;s&&u(s)}function v(){d=localStorage.getItem("favorites");try{a=JSON.parse(d)}catch(t){console.log(t),a=[]}}function m(t){if(t.target.dataset.action!=="delete")return;const s=t.target.dataset.id,e=a.find(({_id:n})=>n===s),i=a.indexOf(e);a.splice(i,1),localStorage.setItem("favorites",JSON.stringify(a)),a.length||r.gymInfo.classList.remove("is-hidden"),o()}function h(){v(),a.length?(r.gymInfo.classList.add("is-hidden"),o()):r.gymInfo.classList.remove("is-hidden")}function o(){const t=a.reduce((s,{_id:e,rating:i,name:n,burnedCalories:c,time:l,bodyPart:g,target:f})=>s+`<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${e}">
        <svg class="card-btn-delete-svg" width="16" height="16" data-action="delete" data-id="${e}"">
          <use xlink:href="/img/symbol-defs.svg#icon-trash" data-action="delete" data-id="${e}"></use>
        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${e}">
        Start
        <svg class="card-arrow-svg" width="14" height="14" data-action="start" data-id="${e}">
          <use
            xlink:href="/img/symbol-defs.svg#icon-arrow" data-action="start"
            data-id="${e}"
          ></use>
        </svg>
      </button>
    </div>
    <div class="card-runing-men-wrapper">
      <svg class="card-runing-men-svg" width="24" height="24">
        <use xlink:href="/img/symbol-defs.svg#icon-running-men"></use>
      </svg>
      <span class="card-name-traning">${n} </span>
    </div>
    <p class="card-burned-calories-text">
      Burned calories:
      <span class="card-burned-calories-span"
        >${c} / ${l} min</span
      >
    </p>

    <p class="card-body-part-text">
      Body part:
      <span class="card-burned-calories-span">${g}</span>
    </p>
    <p class="card-target-text">
      Target:
      <span class="card-burned-calories-span">${f}</span>
    </p>
  </div>
</li>`,"");r.favoritesList.innerHTML=t}
//# sourceMappingURL=commonHelpers2.js.map
