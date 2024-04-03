import{a as $,i as l,S as E}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function p(o,r){try{const s="https://pixabay.com/api/",i=o,e=new URLSearchParams({key:"42946583-b9bd64904b8b2d582b051d84e",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}),t=`${s}?${e}`;return(await $.get(t)).data}catch{l.error({message:"Server error!",position:"topRight"})}}function f(o){const r=o.hits.map(s=>{const{id:i,webformatURL:e,largeImageURL:t,tags:a,likes:S,views:P,comments:R,downloads:q}=s;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" id=${i} src="${e}" alt="${a}"/>
        </a>
        <div class="gallery-item-info">
          <div class="item-info-atr">
          <h3>Likes</h3>
          <p>${S}</p>
          </div>
          <div class="item-info-atr">
          <h3>Views</h3>
          <p>${P}</p>
          </div>
          <div class="item-info-atr">
          <h3>Comments</h3>
          <p>${R}</p>
          </div>
          <div class="item-info-atr">
          <h3>Downloads</h3>
          <p>${q}</p>
          </div>
        </div>
    </li>
    `}).join("");y.insertAdjacentHTML("beforeend",r)}const y=document.querySelector(".gallery"),g=document.querySelector("#search-form"),h=document.querySelector("#load-more-btn"),L=document.querySelector("#loader");let d,v,c;const M=15;let n;const b=new E(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});g.addEventListener("submit",async o=>{if(o.preventDefault(),y.innerHTML="",c=1,d=o.target.elements.query.value,d.trim()==""){l.warning({message:"The search field is empty. Please try again!",position:"topRight"}),g.reset();return}else{try{w(),n=await p(d,c),v=Math.ceil(n.totalHits/M),n.hits.length?(m(),f(n),b.refresh(),u()):(m(),l.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}),u())}catch{m(),l.error({message:"Error render gallery. Please try again!",position:"topRight"})}g.reset()}});h.addEventListener("click",x);async function x(){c+=1,w();try{n=await p(d,c),f(n),b.refresh()}catch{l.error({position:"topRight",message:"Error next render gallery"})}m(),B(),u()}function B(){const r=document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function u(){c>=v?(h.classList.add("is-hidden"),l.info({message:"We're sorry, there are no more images to load",position:"topRight"})):h.classList.remove("is-hidden")}function m(){L.classList.add("is-hidden")}function w(){L.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
