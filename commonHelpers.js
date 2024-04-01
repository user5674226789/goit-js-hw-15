import{a as $,i as n,S as q}from"./assets/vendor-95dc692e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function h(o,s){try{const r="https://pixabay.com/api/",i=o.trim().split(",").join("+"),e=new URLSearchParams({key:"42946583-b9bd64904b8b2d582b051d84e",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}),t=`${r}?${e}`;return(await $.get(t)).data}catch{return n.error({message:"Server error!",position:"topRight"})}}function p(o){const s=o.hits.map(r=>{const{id:i,webformatURL:e,largeImageURL:t,tags:a,likes:R,views:w,comments:P,downloads:S}=r;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" id=${i} src="${e}" alt="${a}"/>
        </a>
        <div class="gallery-item-info">
          <div class="item-info-atr">
          <h3>Likes</h3>
          <p>${R}</p>
          </div>
          <div class="item-info-atr">
          <h3>Views</h3>
          <p>${w}</p>
          </div>
          <div class="item-info-atr">
          <h3>Comments</h3>
          <p>${P}</p>
          </div>
          <div class="item-info-atr">
          <h3>Downloads</h3>
          <p>${S}</p>
          </div>
        </div>
    </li>
    `}).join("");f.insertAdjacentHTML("beforeend",s)}const f=document.querySelector(".gallery"),d=document.querySelector("#search-form"),u=document.querySelector("#load-more-btn"),g=document.querySelector("#loader");let E,y,l=1;const M=15,L=new q(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});d.addEventListener("submit",async o=>{o.preventDefault(),f.innerHTML="";const s=o.target.elements.query.value;if(s.trim()==""){n.warning({message:"The search field is empty. Please try again!",position:"topRight"}),m(),d.reset();return}else{try{b();const r=await h(s,l);y=Math.ceil(r.totalHits/M),r.hits.length?(c(),p(r),L.refresh(),v()):(c(),m(),n.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}))}catch{c(),n.error({message:"Error render gallery. Please try again!",position:"topRight"})}d.reset()}});u.addEventListener("click",O);async function O(){l+=1,b();try{const o=await h(E,l);p(o),L.refresh()}catch{n.error({position:"topRight",message:"ERROR"})}c(),v()}function v(){l>=y?(m(),n.info({message:"We're sorry, there are no more images to load",position:"topRight"})):B()}function m(){u.classList.add("is-hidden")}function B(){u.classList.remove("is-hidden")}function c(){g.classList.add("is-hidden")}function b(){g.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
