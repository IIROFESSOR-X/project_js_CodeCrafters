import"./assets/quote-section-f2c87da4.js";import"./assets/vendor-0cb09735.js";let u=localStorage.getItem("favorites"),e;const t={favoritesList:document.querySelector(".favorites-list"),gymInfo:document.querySelector(".gym-info")};window.addEventListener("load",v);t.favoritesList.addEventListener("click",p);function f(){try{e=JSON.parse(u)}catch(s){console.log(s),e=[]}return e}function p(s){if(s.target.nodeName!=="BUTTON"||s.target.dataset.action!=="delete")return;const r=s.target.dataset.id,a=e.find(({_id:n})=>n===r),i=e.indexOf(a);e.splice(i,1),localStorage.setItem("favorites",JSON.stringify(e)),d()}function v(){f(),e.length?(t.gymInfo.classList.add("is-hidden"),d()):t.gymInfo.classList.remove("is-hidden")}function d(){const s=e.reduce((r,{_id:a,rating:i,name:n,burnedCalories:o,time:c,bodyPart:l,target:g})=>r+`<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${a}">
        <svg class="card-btn-delete-svg" width="16" height="16">
          <use xlink:href="/img/symbol-defs.svg#icon-trash"></use>
        </svg>
      </button>
      <button class="card-start-button" data-id="${a}">
        Start
        <svg class="card-arrow-svg" width="14" height="14" data-id="${a}">
          <use
            xlink:href="/img/symbol-defs.svg#icon-arrow"
            data-id="${a}"
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
        >${o} / ${c} min</span
      >
    </p>

    <p class="card-body-part-text">
      Body part:
      <span class="card-burned-calories-span">${l}</span>
    </p>
    <p class="card-target-text">
      Target:
      <span class="card-burned-calories-span">${g}</span>
    </p>
  </div>
</li>`,"");t.favoritesList.innerHTML=s}
//# sourceMappingURL=commonHelpers2.js.map
